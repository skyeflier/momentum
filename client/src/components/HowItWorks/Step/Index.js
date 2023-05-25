import React from 'react';
import './Step.css';
import IconHddNetwork from './icons/IconHddNetwork';
const Index = (props) => {
    return (
        <div className='step'>

            <d className='step__body'>

                <img className='icon' src={props.icon} alt={props.title} />
                <h3 className='step__title'>{props.title}</h3>
                <p className='step__description'>{props.description}</p>
            </d>
        </div>
    );
};

export default Index;
