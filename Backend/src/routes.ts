import express from "express"
import { SubmitFeedback } from './services/submitFeedback';
import { PrismaFeedbackRepository } from './repositories/prisma/prismaFeedbackRepositories';
import { NodemailerMailAdapter } from './adpters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body
    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedback = new SubmitFeedback(prismaFeedbackRepository,nodemailerMailAdapter)


    await submitFeedback.execute({
        type,
        comment,
        screenshot
    })
    return res.status(201).send()
})

