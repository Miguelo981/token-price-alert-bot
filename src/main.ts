import { startBot } from "./bot/index.js"
import { initClient } from "./services/notification/discord.js"

(async () => {
  await initClient()
  startBot()
})()