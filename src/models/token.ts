import { NotificationCondition, NotificationType, TokenAddress } from "../types/types.js";

export interface TokenAlert {
  address: TokenAddress;
  condition: NotificationCondition;
  value_in_usd: number;
  notification_types: NotificationType[];
}

const greaterThan = (price: number, value: number) => price > value;
const lessThan = (price: number, value: number) => price < value;

type ConditionAlert = {
  [key in NotificationCondition]: (price: number, value: number) => boolean;
};

export const ConditionAlert: ConditionAlert = {
  above: greaterThan,
  below: lessThan,
}

