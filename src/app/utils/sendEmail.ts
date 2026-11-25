import nodemailer from 'nodemailer'
import config from '../config'

// Create a transporter using SMTP

export const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.node_env === 'production', // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
      user: 'alamin@nspbd.net',
      pass: 'nocn hdqt hkwm lzsv',
    },
  })

  try {
    const info = await transporter.sendMail({
      from: 'alamin@nspbd.net', // sender address
      to: to, // list of recipients
      subject: subject, // subject line
      html: html, // HTML body
    })

    console.log('Message sent:', info.messageId)

    return info
  } catch (err) {
    console.error('Error while sending mail:', err)
  }
}
