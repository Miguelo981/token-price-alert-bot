import { sendChannelMessage } from "../services/notification/discord.js";
import { NotificationType } from "../types/types.js";

type NotificationServices = {
  [key in NotificationType]: <T>(...T) => void;
};

export const NotificationServices: NotificationServices = {
  sms: () => console.log('sms'),
  email: () => console.log('email'),
  discord: sendChannelMessage,
  telegram: () => console.log('telegram'),
  slack: () => console.log('slack'),
  whatsapp: () => console.log('whatsapp'),
}