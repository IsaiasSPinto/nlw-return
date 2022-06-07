import { MailAdapter } from "../adpters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacksRepository";

export interface SubmitFeedbackRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedback {
   

    constructor(
        private feedbacksRepository: FeedbackRepository,
        private mailAdapter: MailAdapter,
    ){}
    async execute(request : SubmitFeedbackRequest) {
        const { type, comment, screenshot } = request;

        if(!type) {
            throw new Error('Type is required')
        }

        if(!comment) {
            throw new Error('comment is required')
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid Screenshot')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentario: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" />`: ``,
                `</div>`
            ].join('\n')
        })
    }
}