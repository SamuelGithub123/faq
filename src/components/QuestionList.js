import React, { Component } from 'react';
import Question from './Question'

const QuestionList = ({questions}) => {
    return (
        <article className='container'>
            {questions.map((question) => {
                return (
                <Question key={question.id} {...question}>
                </Question>
                );
            })}
        </article>
    )

}

export default QuestionList;