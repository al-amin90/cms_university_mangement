import nodemailer from 'nodemailer'
import config from '../config'

// Create a transporter using SMTP

export const sendEmail = async (to: string, text: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.node_env === 'production', // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
      user: process.env.SMTP_USER || 'alamin@nspbd.net',
      pass: process.env.SMTP_PASS || 'nocn hdqt hkwm lzsv',
    },
  })

  try {
    const info = await transporter.sendMail({
      from: 'alamin@nspbd.net', // sender address
      to, // list of recipients
      subject: 'Hello', // subject line
      text, // plain text body
      html, // HTML body
    })

    console.log('Message sent: %s', info.messageId)
    // Preview URL is only available when using an Ethereal test account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  } catch (err) {
    console.error('Error while sending mail:', err)
  }
}
