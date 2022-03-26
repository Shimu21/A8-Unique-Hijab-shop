import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div>
            <div className='bonusPart'>
                <h2>Bonus Part</h2>
            </div>

            <div className='bonus'>
                <div className='bonus1'>
                    <h6>Question no.1: How React works? </h6>
                    <h6>Answer: </h6>
                </div>

                <div className='bonus2'>
                    <h6>Question no.2: What are the differences between props and state?</h6>
                    <h6>Answer: Differences between props and state are shown below:</h6>
                    <div class="container d-flex mt-3">
                        <div class="mx-auto">
                            Local Storage
                            <ul>
                                <li>Data is stored even page session ends</li>
                                <li>It saves data for long term</li>
                                <li>It allows to set value and store even after the tab closed</li>
                            </ul>
                        </div>
                        <div class="mx-auto">
                            Session Storage
                            <ul>
                                <li>Data is cleared when page session ends</li>
                                <li>It keeps data temporarily</li>
                                <li>It doesn't show value after session ends</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;