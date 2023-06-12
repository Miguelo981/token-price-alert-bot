import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { EMAIL_SUBJECT, FROM_EMAIL, SMPT_HOST, SMPT_PASS, SMPT_PORT, SMPT_USER, TO_EMAIL } from "../../constants.js"
import { createTransport } from "nodemailer"

const configOptions: SMTPTransport.Options = {
  host: SMPT_HOST,
  port: SMPT_PORT,
  secure: false,
  auth: {
    user: SMPT_USER,
    pass: SMPT_PASS,
  }
}

export async function sendMessage(message: string) {
  const transporter = createTransport(configOptions)
  const res = await transporter.sendMail({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: EMAIL_SUBJECT,
    text: message,
  });

  if (res.rejected.length > 0) {
    throw new Error(`Email rejected: ${res.rejected}`)
  }

  return res
}