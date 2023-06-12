import { Client, GatewayIntentBits, Partials } from "discord.js"
import { DISCORD_BOT_TOKEN, DISCORD_CHANNEL_ID } from "../../constants.js"

let client: Client

export async function initClient() {
  if (client) return

  client = new Client({
    intents: [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.Guilds
    ],
    partials: [
      Partials.Message,
      Partials.Channel,
    ]
  })

  await new Promise((resolve) => {
    client.on("ready", resolve)
    client.login(DISCORD_BOT_TOKEN)
  })
}

export async function sendChannelMessage(message: string) {
  const channel = await client.channels.cache.get(DISCORD_CHANNEL_ID)
  
  if (!channel) return
  
  (channel as any).send(message)
}