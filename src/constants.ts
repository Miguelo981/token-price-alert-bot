import dotenv from 'dotenv'
import { JsonRpcProvider } from 'ethers'
import { TokenAddress } from './types/types.js'
dotenv.config()

export const BSCCAN_HOST = 'https://api.bscscan.com/api'
export const BSCSAN_API_KEY = process.env.BSCSAN_API_KEY
export const BCSN_API_TIMEOUT = Number(process.env.BCSN_API_TIMEOUT ?? 5000)
export const BSC_PROVIDER = new JsonRpcProvider('https://bsc-dataseed1.binance.org')
export const PANCAKESWAP_ROUTER_ADDRESS: TokenAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E'
export const USDTokenAddress: TokenAddress  = "0x55d398326f99059fF775485246999027B3197955"
export const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN
export const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID