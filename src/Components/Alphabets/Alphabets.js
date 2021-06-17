import React from 'react';

import data from '../data/data.json';
import {
    LetterSection
} from './AlphabetStyle';
import { useHistory } from 'react-router-dom';


const Alphabet = () => {

    const history = useHistory();
    const handleClick = (key) => {
        localStorage.setItem('keyVal', key);
        history.push("/details");
    }

    return (
        <LetterSection>
            <div className="letter-wrapper">
                {data.map((data, index) => {
                    return (
                        <div key={index} onClick={() => handleClick(data.key)} className="flip-letter">
                            <div className="flip-letter-inner">
                                <div className="flip-letter-front">
                                    <span className={data.color}>{data.title}</span>
                                </div>
                                <div className="flip-letter-back">
                                    <img src={data.foodImg} title="Click Me" alt={data.food} />
                                </div>
                            </div>
                        </div>
                    );
                })
                }

            </div>
        </LetterSection>
    )
}

export default Alphabet;