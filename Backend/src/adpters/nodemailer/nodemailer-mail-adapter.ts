import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e2e71ff60ad530",
        pass: "7d45140c05e984"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
        from: "equipe feedback <oi@flasjdng.com>",
        to: "Isaias <isaiascxs10@gmail.com>",
        subject,
        html: body
    })

    }
}