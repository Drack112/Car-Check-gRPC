import { EmaiLData } from '../interfaces/email.interface';
import nodemailer from 'nodemailer';

export const sendMail = async (data: EmaiLData): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: String(process.env.MAILHOG_HOST),
    port: +process.env.MAILHOG_PORT,
  });

  const mail = {
    to: data.email,
    from: 'carshop@email.com',
    subject: 'Your Purchase Has Been Completed',
    html: `
      <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Detalhes do carro</title>
          </head>
          <body>
              <h2>Detalhes do carro</h2>
              <p>Olá, ${data.firstName}!</p>
              <p>Aqui estão os detalhes do seu carro:</p>
              <ul>
                  <li><strong>VIN:</strong> ${data.vin}</li>
                  <li><strong>Modelo do carro:</strong> ${data.carModel}</li>
                  <li><strong>Fabricante:</strong> ${data.make}</li>
              </ul>
              <p>Obrigado por escolher nossos serviços!</p>
          </body>
          </html>
    `,
  };

  await transporter.sendMail(mail);
};
