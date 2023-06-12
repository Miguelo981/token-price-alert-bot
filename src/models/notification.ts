import { sendChannelMessage as sendDiscordMessage } from "../services/notification/discord.js";
import { sendMessage as sendEmailMessage } from "../services/notification/email.js";
import { sendMessage as sendTelegramMessage } from "../services/notification/telegram.js";
import { NotificationType } from "../types/types.js";

type NotificationServices = {
  [key in NotificationType]: <T>(...T) => void;
};

export const NotificationServices: NotificationServices = {
  sms: () => console.log('sms'),
  email: sendEmailMessage,
  discord: sendDiscordMessage,
  telegram: sendTelegramMessage,
  slack: () => console.log('slack'),
  whatsapp: () => console.log('whatsapp'),
}