import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../../utils/mutations';

import { ADD_USER } from '../../utils/mutations';
import { scroller } from 'react-scroll';
import TopBar from '../TopBar/Index';
import TitleBox from '../TitleBox/Index';
import Body from '../Body/Index';

import Modal from '../Modal/Index';
import Login from '../Login/Index';
import Register from '../Register/Index';
import Checkout from './Checkout';

// import { useNavigate } from 'react-router-dom';

const Home = () => {
    // const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [moveToCheckout, setMoveToCheckout] = useState(false);
    const [addUser] = useMutation(ADD_USER);
    const [addOrder] = useMutation(ADD_ORDER);
    const handleLoginClick = () => {
        setOpenModal(true);
        setOpenLogin(true);
        setOpenRegister(false);
    };

    const handleRegisterClick = () => {
        setOpenModal(true);
        setOpenLogin(false);
        setOpenRegister(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const onPaymentClick = () => {
        if (user) {
            // navigate('/checkout');
            // setMoveToCheckout(true);

            // scroll to checkout
            moveToCheckoutSmooth();
        } else {
            handleRegisterClick();
        }
    };

    const handleRegister = () => {
        // setUser(user)

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(payload)
        // };
        // fetch('/api/users/register', requestOptions)//this route matches the backend route
        //     .then(response => {
        //         if (response.status === 200) {
        //             return response.json();
        //         } else {
        //             alert('Something went wrong!!!!!');
        //         }
        //     })
        //send payload to server and wait for response and then set user
        // setUser(payload);
        //store response in local storage
        // localStorage.setItem('shippingUser', JSON.stringify(user));
        setOpenRegister(false);
        setOpenLogin(true);
    };

    const handleLogin = (user) => {
        setUser(user)
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(payload)
        // };
        // fetch('/api/users/login', requestOptions)//this route matches the backend route
        //     .then(response => {
        //         if (response.status === 200) {
        //             return response.json();
        //         } else {
        //             alert('Invalid Credentials!!!!!');
        //         }
        //     })
        //     .then(data => setUser(data));
        // //send payload to server and wait for response and then set user
        // //store response in local storage
        // localStorage.setItem('shippingUser', JSON.stringify(user));
        setOpenModal(false);
        setMoveToCheckout(true);
        moveToCheckoutSmooth();
        // if (user.email === payload.email && user.password === payload.password) {
        //     setOpenModal(false);
        //     setMoveToCheckout(true);

        //     // scroll to checkout
        //     moveToCheckoutSmooth();
        // } else {
        //     alert('Invalid Credentials!!!!!');
        // }
    };

    const handleCheckout = (payload) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        fetch('/api/cart/checkout', requestOptions)//this route matches the backend route
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Something went wrong!!!!!');
                }
            })

        //what to do with cart?
        // .then(data => setUser(data));
    };

    useEffect(() => {
        // const shippingUser = JSON.parse(localStorage.getItem('shippingUser'));

        setUser('');
    }, []);
    return (
        <div className='home'>
            {openModal === true && (
                <Modal onCloseModal={handleCloseModal}>
                    {openLogin === true && <Login onLogin={handleLogin} />}
                    {openRegister === true && <Register onRegister={handleRegister} />}
                </Modal>
            )}
            <TopBar
                onClickLogin={handleLoginClick}
                onClickRegister={handleRegisterClick}
                user={user}
            />
            <TitleBox />
            <Body onPaymentClick={onPaymentClick} />
            {/* {moveToCheckout && <Checkout />} */}

            {/* <Checkout onCheckout={handleCheckout} /> */}
        </div>
    );
};

export default Home;

function moveToCheckoutSmooth() {
    scroller.scrollTo('checkout', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOut',
    });
}