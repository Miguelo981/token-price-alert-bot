import { sendChannelMessage as sendDiscordMessage } from "../services/notification/discord.js";
import { sendMessage as sendEmailMessage } from "../services/notification/email.js";
import { initBot, sendMessage as sendTelegramMessage } from "../services/notification/telegram.js";
import { NotificationType } from "../types/types.js";
import { initClient as initDiscordClient } from "../services/notification/discord.js";
import { initClient as initTwilioClient, sendMessage as sendWhatsappMessage, sendSMS } from "../services/notification/twilio.js";

type NotificationServices = {
  [key in NotificationType]: <T>(...T) => void;
};

export const NotificationServices: NotificationServices = {
  sms: () => sendSMS,
  email: sendEmailMessage,
  discord: sendDiscordMessage,
  telegram: sendTelegramMessage,
  whatsapp: () => sendWhatsappMessage,
  slack: () => console.log('slack'),
}

export const NotificationClients = [
  initTwilioClient,
  initDiscordClient,
  initBot,
]