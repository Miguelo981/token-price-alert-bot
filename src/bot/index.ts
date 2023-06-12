import { InterfaceAbi, isAddress } from "ethers";
import { readFile } from "fs/promises";
import { PANCAKE_ROUTER_ABI_PATH, TOKENS_FILE_PATH, USDTokenAddress } from "../constants.js";
import { NotificationClients, NotificationServices } from "../models/notification.js";
import { TokenAlert, ConditionAlert } from "../models/token.js";
import { calcSellBSC, getSymbol } from "../services/token.js";
import { logger } from "../logger.js";
import { existsSync } from "fs";

export async function startClients() {
  logger.info('|--- Starting clients ---|')
  for (const client of NotificationClients) {
    try {
      await client.init()
      logger.info(`|--- ${client.name} started ---|`)
    } catch (error) {
      logger.error(`${client.name} service got wrong credentials.`)
    }
  }
  logger.info('|--- Clients started ---|')
}

export async function startBot() {
  if (!existsSync(PANCAKE_ROUTER_ABI_PATH)) {
    logger.error('Pancake Router ABI file not found.')
    process.exit(1)
  }

  const PANCAKE_ROUTER_ABI: InterfaceAbi = JSON.parse(await readFile(PANCAKE_ROUTER_ABI_PATH) as any);
  
  if (!existsSync(TOKENS_FILE_PATH)) {
    logger.error('Tokens file not found.')
    process.exit(1)
  }

  const tokens: TokenAlert[] = JSON.parse(await readFile(TOKENS_FILE_PATH) as any);
  
  logger.info('|--- Bot started ---|')

  for (const token of tokens) {
    if (!isAddress(token.address)) continue

    const price = await calcSellBSC(token.address, PANCAKE_ROUTER_ABI, USDTokenAddress)

    if (!price) continue

    if (ConditionAlert[token.condition](price, token.value_in_usd)) {
      const msg = `Price of ${await getSymbol(token.address)} is ${token.condition} ${token.value_in_usd} ${await getSymbol(USDTokenAddress)} !`
      
      logger.info(msg)

      for (const type of token.notification_types) {
        try {
          await NotificationServices[type](msg)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }

  logger.info('|--- Bot finished ---|')
}