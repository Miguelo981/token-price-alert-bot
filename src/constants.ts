import dotenv from 'dotenv'
import { JsonRpcProvider } from 'ethers'
dotenv.config()

export const BSCCAN_HOST = 'https://api.bscscan.com/api'
export const BSCSAN_API_KEY = process.env.BSCSAN_API_KEY
export const BCSN_API_TIMEOUT = Number(process.env.BCSN_API_TIMEOUT ?? 5000)
export const BSC_PROVIDER = new JsonRpcProvider('https://bsc-dataseed1.binance.org')
export const PANCAKESWAP_ROUTER_ADDRESS = '0x10ED43C718714eb63d5aA57B78B54704E256024E'
