import React from 'react';
import './page-body.css';

import HowItWorks from '../HowItWorks/Index';
import PaymentPlan from '../PaymentPlan/Index';
export default function Body(props) {
    return (
        <div className='page-body'>
            <div className='page-body__content container'>
                <p className='page-body__description'>
                    Welcome to MOMentum, the monthly subscription box designed to support busy moms on their fitness journey.
                    Follow the simple steps below to get started and unlock a world of wellness right at your doorstep!
                </p>
                <HowItWorks />
                <div className='page-body_payment-plan-container'><PaymentPlan onPaymentClick={props.onPaymentClick} /></div>

            </div>
        </div>
    );
}