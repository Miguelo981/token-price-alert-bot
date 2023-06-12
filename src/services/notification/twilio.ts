import Twilio from 'twilio'
import { FROM_NUMBER, TO_NUMBER, TWILIGIO_ACCOUNT_SID, TWILIGIO_AUTH_TOKEN } from '../../constants.js'

let client

export async function initClient() {
  if (client) return

  client = Twilio(TWILIGIO_ACCOUNT_SID, TWILIGIO_AUTH_TOKEN)
}

export async function sendSMS(message: string) {
  const res = await client.messages
    .create({
      body: message,
      to: TO_NUMBER,
      from: FROM_NUMBER,
    })
  
  return res
}

export async function sendMessage(message: string) {
  const res = await client.messages
    .create({
      body: message,
      to: `whatsapp:${TO_NUMBER}`,
      from: `whatsapp:${FROM_NUMBER}`,
    })
  
  return res
}