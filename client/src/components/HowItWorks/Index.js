import React from 'react';
import './HowItWorks.css';

import Step from './Step/Index';

const steps = [
    {
        title: 'Step 1',
        description: 'Click on the "Register" button and fill out the registration form with your name, email address, and desired password. Once you have filled in the required information, click on the "Submit" button to create your MOMentum account',
        icon: '/images/step1_icon.png'


    },
    {
        title: 'Step 2',
        description: 'Log in after registering. Enter your registered email address and password in the provided fields. Click on the "Log In" button to access your MOMentum account',
        icon: '/images/step2_icon.png'

    },

    {
        title: 'Step 3',
        description: 'Once you are logged in, navigate to the "Checkout" section to start you monthly payments. Follow the prompts to provide your payment information and complete the purchase.',
        icon: '/images/step3_icon.png'


    },
];
const Index = () => {
    return (
        <section className='how-it-works'>
            <h2>How It Works</h2>
            <div className='how-it-works__body'>
                <Step title={steps[0].title} description={steps[0].description} icon={steps[0].icon} />


                <Step title={steps[1].title} description={steps[1].description} icon={steps[1].icon} />

                <Step title={steps[2].title} description={steps[2].description} icon={steps[2].icon} />
            </div>
        </section>
    );
};

export default Index;
