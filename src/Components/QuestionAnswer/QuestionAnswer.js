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
                    <h6>Answer: React is a declarative, efficient, flexible javascripts library. It helps for building
                        user interfaces.  It has four ways to identify the types of Components.
                        Components are used to display data in the UI which we want to see. When our data changes,
                        react will re-render and update our compopnents. In summary, we can say react is a very
                        needful javascript library to build interactive website.
                    </h6>
                </div>

                <div className='bonus2'>
                    <h6>Question no.2: What are the differences between props and state?</h6>
                    <h6>Answer: Differences between props and state are shown below:</h6>
                    <div class="container d-flex mt-3">
                        <div class="mx-auto">
                            Props
                            <ul>
                                <li>Property is called props.</li>
                                <li>Props are used to pass data from
                                    one component to another.
                                </li>
                                <li>Props are external.</li>
                            </ul>
                        </div>
                        <div class="mx-auto">
                            State
                            <ul>
                                <li>State is somethhing that could change.</li>
                                <li>State is a local data storage that can not be passed to other components.</li>
                                <li>State is internal.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;