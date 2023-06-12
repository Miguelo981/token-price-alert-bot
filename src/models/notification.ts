import { sendChannelMessage } from "../services/notification/discord.js";
import { sendMessage } from "../services/notification/email.js";
import { NotificationType } from "../types/types.js";

type NotificationServices = {
  [key in NotificationType]: <T>(...T) => void;
};

export const NotificationServices: NotificationServices = {
  sms: () => console.log('sms'),
  email: () => sendMessage,
  discord: sendChannelMessage,
  telegram: () => console.log('telegram'),
  slack: () => console.log('slack'),
  whatsapp: () => console.log('whatsapp'),
}