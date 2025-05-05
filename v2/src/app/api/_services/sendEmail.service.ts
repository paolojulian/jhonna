import transporter from '@/app/api/_lib/mailer';

type SendEmailParams = {
  subject: string;
  text: string;
  to: string;
};

export async function sendEmail({ subject, text, to }: SendEmailParams) {
  const mailOptions = {
    from: process.env.GMAIL_APP_USERNAME,
    to, // The person you want your email to be sent
    subject,
    text,
    // You can also add in HTML if you dont want plain text
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.error(err);
        if (err instanceof Error) {
          return reject(err);
        } else {
          return reject(new Error('Unable to send email'));
        }
      }

      const message = `Message delivered to ${to}`;

      return resolve(message);
    });
  });
}
