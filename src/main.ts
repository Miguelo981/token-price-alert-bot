import { InterfaceAbi } from "ethers"
import { calcSellBSC } from "./services/token.js"
import { TokenAddress } from "./types/types.js"
import { readFile } from "fs/promises"
import { ConditionAlert, TokenAlert } from "./models/token.js"
import { NotificationServices } from "./models/notification.js"

(async () => {
  //const BNBTokenAddress: TokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" //BNB
  const USDTokenAddress: TokenAddress  = "0x55d398326f99059fF775485246999027B3197955" //USDT
  //const abi = await getTokenABI(address)
  const PANCAKE_ROUTER_ABI: InterfaceAbi = JSON.parse(await readFile('./assets/abis/pancakeswap-router-abi.json') as any);
  const tokens: TokenAlert[] = JSON.parse(await readFile('./src/assets/tokens.json') as any);
  
  for (const token of tokens) {
    const price = await calcSellBSC(token.address, PANCAKE_ROUTER_ABI, USDTokenAddress)
    console.log(`Price of ${token.address} is ${price}`)

    if (ConditionAlert[token.condition](price, token.value_in_usd)) {
      console.log(`Price of ${token.address} is ${token.condition} ${token.value_in_usd}`)
      NotificationServices[token.notification_types[0]]()
    }
  }
})()