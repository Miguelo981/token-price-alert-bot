import { startBot, startClients } from "./bot/index.js"
import { APP_LOOP_INTERVAL } from "./constants.js";

(async () => {
  await startClients()
  
  setInterval(startBot, APP_LOOP_INTERVAL);
})()