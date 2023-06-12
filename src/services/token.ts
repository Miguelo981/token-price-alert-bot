import { BCSN_API_TIMEOUT, BSCCAN_HOST, BSCSAN_API_KEY, BSC_PROVIDER, PANCAKESWAP_ROUTER_ADDRESS } from "../constants.js";
import { logger } from "../logger.js";
import type { TokenAddress } from "../types/types.js";
import { Contract, InterfaceAbi, formatUnits, parseUnits } from 'ethers'

const API_URL = new URL(BSCCAN_HOST)
API_URL.searchParams.append('module', 'contract')
API_URL.searchParams.append('action', 'getabi')
API_URL.searchParams.append('apikey', BSCSAN_API_KEY)

export async function getTokenABI(tokenAddress: TokenAddress): Promise<string> {
    API_URL.searchParams.append('address', tokenAddress)

    const controller = new AbortController()
    setTimeout(() => controller.abort(), BCSN_API_TIMEOUT)

    const res = await fetch(API_URL.toString(), {
        signal: controller.signal
    })
    const json = await res.json()

    if (!res.ok) {
        throw new Error(json.message)
    }

    return json.result
}

export async function calcSellBSC(tokenInAddress: TokenAddress, pancakeswapABI: InterfaceAbi, tokenOutAddress: TokenAddress): Promise<number> {
  try {
    const routerContract = new Contract(PANCAKESWAP_ROUTER_ADDRESS, pancakeswapABI, BSC_PROVIDER)
    const toSell = parseUnits('1.00', 'ether');
    const [, amount] = await routerContract.getAmountsOut(toSell, [tokenInAddress, tokenOutAddress])
    const price = formatUnits(amount, 18)

    return Number(price)
  } catch (err) {
    logger.error(`${tokenInAddress} or ${tokenOutAddress} are not a valid BEP-20 token address.`)
    return
  }
}

export async function getSymbol(tokenAddress: TokenAddress): Promise<string> {
    const tokenContract = new Contract(tokenAddress, [
      {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },], BSC_PROVIDER)
    
    return tokenContract.symbol()
}