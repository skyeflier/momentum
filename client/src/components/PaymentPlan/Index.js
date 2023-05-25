import React from 'react';
import './PaymentPlan.css';
import { subscribe } from 'graphql';

const Index = (props) => {
    const handlePayment = () => {
        props.onPaymentClick();
    };
    return (

        <div className='payment' onClick={handlePayment}>
            <div className='payment__content'>
                <h4 className='payment__title'>Monthly MOMentum Box</h4>
                <div className='payment__price-box'>
                    <span className='price__per-unit'>Pay per box</span>
                    <p className='price__number'>$39.99</p>
                    <span className='price__billing-period'>Billed monthly</span>
                </div>
                <div className='payment__plan'>
                    <ul className='plan__features'>
                        <li className='plan__feature'>
                            <span className='plan__feature-tick'>&#10003;</span>Portable fitness equipment like resistance bands,
                            mini dumbbells, Pilates balls, or compact exercise sliders
                        </li>
                        {/* <li className='plan__feature'>
                            <span className='plan__feature-tick'>&#10003;</span>Additional surprises like skincare samples, healthy drink mixes, fitness accessories, or small lifestyle.
                        </li> */}
                        <li className='plan__feature'>
                            <span className='plan__feature-tick'>&#10003;</span>Monthly workout routines
                        </li>
                        <li className='plan__feature'>
                            <span className='plan__feature-tick'>&#10003;</span>Additional monthly surprises! (i.e. fitness trackers, healthy drink mixes, motivational books, etc.)
                        </li>
                        <li className='plan__feature'>
                            <span className='plan__feature-tick'>&#10003;</span>Cancel anytime
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Index;