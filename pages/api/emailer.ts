import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
    result: string;
    errors: string[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const SMTPConfig = {
        port: +(process.env.SMTP_PORT || 465),
        host: process.env.SMTP_HOST,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        secure: true,
    };
    const transporter = nodemailer.createTransport(SMTPConfig);

    const mail = {
        from: req.body.email,
        to: process.env.INBOX,
        subject: `Message From ${req.body.email}`,
        text: req.body.message + ' | Sent from: ' + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
    };

    try {
        await transporter.sendMail(mail);
    } catch (error) {
        console.log('Error sending email', error);
        return res
            .status(500)
            .json({ result: 'Failed', errors: ['Error sending email'] });
    }

    res.status(200).json({ result: 'Success', errors: [] });
}
