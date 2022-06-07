import { CloeseButton } from "../CloeseButton";
import BugImg from '../../assets/img/Bug.svg'
import ideaImg from '../../assets/img/Idea.svg'
import thoughtImg from '../../assets/img/Thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./FeedbackTypeStep";
import { FeedbackContentStep } from "./FeedbackContentStep";
import { FeedbackSuccessStep } from "./FeedbackSuccessStep";

export const FeedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: BugImg,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImg,
            alt: 'Imagem de uma lampada'
        }
    },
    Other: {
        title: 'Outro',
        image: {
            source: thoughtImg,
            alt: 'Imagem de uma nuvem'
        }
    }
}

export type FeedbackType = keyof typeof FeedbackTypes;


export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSend, setFeedbackSend] = useState(false)

    function handleRestartFeedback() {
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSend ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>

                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            onFeedbackSend={() => setFeedbackSend(true)}
                            feedbackType={feedbackType}
                            onFeedbackRestartedRequest={handleRestartFeedback}
                        />
                    )}

                </>
            )
            }

            <footer>
                Feito com ❤️ pela <a href="https://rockeat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}

