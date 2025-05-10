import nodemailer from 'nodemailer';

const ENVIRONMENTS = {
  GMAIL_APP_USERNAME: process.env.GMAIL_APP_USERNAME || '',
  GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD || '',
};

Object.entries(ENVIRONMENTS).map(([key, value]) => {
  if (!value) {
    throw new Error(`${key} should be defined on the .env file.`);
  }
});

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: ENVIRONMENTS.GMAIL_APP_USERNAME,
    pass: ENVIRONMENTS.GMAIL_APP_PASSWORD,
  },
});

export default transporter;