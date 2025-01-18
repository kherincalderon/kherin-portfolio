import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, service, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_RECEIVER,
        subject: `New contact request: ${firstname} ${lastname}`,
        text: `You have a new contact request:
        - Name: ${firstname} ${lastname}
        - Email: ${email}
        - Phone: ${phone}
        - Service: ${service}
        - Message: ${message}`,
        html: `<h3>New contact request</h3>
               <p><strong>Name:</strong> ${firstname} ${lastname}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Service:</strong> ${service}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
