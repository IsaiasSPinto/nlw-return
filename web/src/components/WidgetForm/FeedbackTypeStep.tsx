import React from 'react'
import { FeedbackType, FeedbackTypes } from '.';
import { CloeseButton } from '../CloeseButton';


interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (
        <>

            <header>
                <span className="text-sl leading-6">Deixe seu Feedback</span>
                <CloeseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(FeedbackTypes).map(([key, value]) => {

                    return (
                        <button
                            key={key}
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"

                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
    )
}
