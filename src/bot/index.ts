import { InterfaceAbi } from "ethers";
import { readFile } from "fs/promises";
import { USDTokenAddress } from "../constants.js";
import { NotificationServices } from "../models/notification.js";
import { TokenAlert, ConditionAlert } from "../models/token.js";
import { calcSellBSC } from "../services/token.js";

export async function startBot() {
  const PANCAKE_ROUTER_ABI: InterfaceAbi = JSON.parse(await readFile('./assets/abis/pancakeswap-router-abi.json') as any);
  const tokens: TokenAlert[] = JSON.parse(await readFile('./src/assets/tokens.json') as any);
  
  for (const token of tokens) {
    const price = await calcSellBSC(token.address, PANCAKE_ROUTER_ABI, USDTokenAddress)

    if (ConditionAlert[token.condition](price, token.value_in_usd)) {
      const msg = `Price of ${token.address} is ${token.condition} ${token.value_in_usd}`
      console.log(msg)

      for (const type of token.notification_types) {
        await NotificationServices[type](msg)
      }

    }
  }
}