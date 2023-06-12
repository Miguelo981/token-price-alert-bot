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
export const SMPT_HOST = process.env.SMPT_HOST
export const SMPT_PORT = Number(process.env.SMPT_PORT ?? 587)
export const SMPT_USER = process.env.SMPT_USER
export const SMPT_PASS = process.env.SMPT_PASS
export const FROM_EMAIL = process.env.FROM_EMAIL
export const TO_EMAIL = process.env.TO_EMAIL
export const EMAIL_SUBJECT = process.env.EMAIL_SUBJECT
export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
export const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
export const TWILIGIO_ACCOUNT_SID = process.env.TWILIGIO_ACCOUNT_SID
export const TWILIGIO_AUTH_TOKEN = process.env.TWILIGIO_AUTH_TOKEN
export const FROM_NUMBER = process.env.FROM_NUMBER
export const TO_NUMBER = process.env.TO_NUMBER