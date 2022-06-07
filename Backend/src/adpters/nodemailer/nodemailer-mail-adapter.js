"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e2e71ff60ad530",
        pass: "7d45140c05e984"
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: "equipe feedback <oi@flasjdng.com>",
            to: "Isaias <isaiascxs10@gmail.com>",
            subject,
            html: body
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
