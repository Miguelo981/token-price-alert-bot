import TelegramBot from "node-telegram-bot-api";
import { TELEGRAM_CHAT_ID } from "../../constants.js";

let bot: TelegramBot

export async function initBot() {
  if (bot) return

  bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true })
}

export async function sendMessage(message: string) {
  const res = await bot.sendMessage(TELEGRAM_CHAT_ID, message)

  return res
}