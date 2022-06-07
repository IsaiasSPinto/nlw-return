import { SubmitFeedback } from "./submitFeedback"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe('Submit feedback',() => {
    const submitFeedback = new SubmitFeedback(
        {create: createFeedbackSpy}, {sendMail:sendMailSpy}
    )

    it('should be able to submit a feedback',async () => {
        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: 'exemple',
            screenshot: 'data:image/png;base64sadasdas'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('should not be able to submit a feedback without type',async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemple',
            screenshot: 'sadasdas'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback without comment',async () => {
        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: '',
            screenshot: 'sadasdas'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback with an invalid screenshot',async () => {
        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: 'coment',
            screenshot: 'asdasd'
        })).rejects.toThrow();
    })
})