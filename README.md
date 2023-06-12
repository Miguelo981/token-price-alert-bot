# token-price-alert-bot

A bot that allows you to receive notifications via email, SMS, Discord, Telegram, and/or WhatsApp when a listed token's price in USD goes above or below a specified value.

## Configuration

To configure the tokens you want to be notified about, create a `tokens.json` file in the project `src/assets/` directory with the following format:

```json
[
  {
    "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "condition": "above",
    "value_in_usd": 230,
    "notification_types": [
      "email",
      "telegram"
    ]
  },
  {
    "address": "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0",
    "condition": "below",
    "value_in_usd": 5,
    "notification_types": [
      "discord"
    ]
  }
]
```

Replace the example token entries with your desired tokens. Each token object should include the following properties:

| Property           | Type                   | Description                                        |
| ------------------ | ---------------------- | -------------------------------------------------- |
| address            | `TokenAddress`         | BEP-20 valid The token address                     |
| condition          | `NotificationCondition`| The condition to trigger the notification `below` or `above`          |
| value_in_usd       | `number`               | The price value in USD                             |
| notification_types | `NotificationType[]`   | An array of notification types for the alert `email`, `sms`, `discord`, `telegram`, `slack`, `whatsapp`       |

## Environment Variables

The following environment variables need to be set in order for the bot to function correctly:

- `BSCSAN_API_KEY`: API key for BscScan (to fetch token ABIs).
- `DISCORD_BOT_TOKEN`: Bot token for Discord integration.
- `DISCORD_CHANNEL_ID`: Channel ID for Discord notifications.
- `SMTP_HOST`: SMTP host for email notifications.
- `SMTP_PORT`: SMTP port for email notifications.
- `SMTP_USER`: SMTP username for email notifications.
- `SMTP_PASS`: SMTP password for email notifications.
- `FROM_EMAIL`: Sender email address for email notifications.
- `TO_EMAIL`: Recipient email address for email notifications.
- `EMAIL_SUBJECT`: Email subject for notifications.
- `TELEGRAM_BOT_TOKEN`: Bot token for Telegram integration.
- `TELEGRAM_CHAT_ID`: Chat ID for Telegram notifications.
- `TWILIGIO_ACCOUNT_SID`: Twilio account SID for SMS notifications.
- `TWILIGIO_AUTH_TOKEN`: Twilio auth token for SMS notifications.
- `FROM_NUMBER`: Sender phone number for SMS and Whatsapp notifications.
- `TO_NUMBER`: Recipient phone number for SMS and Whatsapp notifications.
- `APP_LOOP_INTERVAL`: Interval (in milliseconds) at which the bot checks for price updates.
- `NODE_ENV`: Node environment (e.g., development, production).

Make sure to set these environment variables either directly or by using a .env file.

## Usage
To start the bot, run the following command:

```
npm run install
```

Development:

```
npm run dev
```

Production:
```
npm run build
npm run start
```

The bot will start monitoring the token prices based on the configurations provided in config.json and send notifications accordingly.

```
info: |--- Starting clients ---|
error: sms service got wrong credentials.
info: |--- discord started ---|
info: |--- telegram started ---|
info: |--- Clients started ---|
info: |--- Bot started ---|
info: Price of WBNB is above 230 USDT !
info: Price of AXS is below 5 USDT !
info: Price of Cake is below 1.5 USDT !
info: Price of ADA is above 0.25 USDT !
info: |--- Bot finished ---|
```

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

We would like to express our gratitude to the open-source community for their invaluable contributions and support.

## Contact

If you have any questions, suggestions, or feedback, please feel free to reach out to us at ma.rodriguez.dev@gmail.com
