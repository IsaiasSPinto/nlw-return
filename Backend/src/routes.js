"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const submitFeedback_1 = require("./services/submitFeedback");
const prismaFeedbackRepositories_1 = require("./repositories/prisma/prismaFeedbackRepositories");
const nodemailer_mail_adapter_1 = require("./adpters/nodemailer/nodemailer-mail-adapter");
exports.routes = express_1.default.Router();
exports.routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbackRepository = new prismaFeedbackRepositories_1.PrismaFeedbackRepository();
    const nodemailerMailAdapter = new nodemailer_mail_adapter_1.NodemailerMailAdapter();
    const submitFeedback = new submitFeedback_1.SubmitFeedback(prismaFeedbackRepository, nodemailerMailAdapter);
    await submitFeedback.execute({
        type,
        comment,
        screenshot
    });
    return res.status(201).send();
});
