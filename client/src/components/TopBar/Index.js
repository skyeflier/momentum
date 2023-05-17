import React from 'react';
import './TopBar.css';
const Index = (props) => {
    const handleClick = (e) => {
        e.preventDefault();

        if (e.target.classList.contains('login')) {
            props.onClickLogin();
        } else {
            props.onClickRegister();
        }
    };


    const handleLogout = (e) => {
        e.preventDefault();

        localStorage.clear()


        window.location.reload()

    }



    return (
        <header className='topbar'>
            <nav className='topbar__nav'>
                <h6 className='fake-brand'>fake brand</h6>
                <ul className='topbar__nav-list'>
                    {!props.user && <li className='topbar__item'>
                        <a
                            href='/login'
                            className='topbar__link login'
                            onClick={handleClick}
                        >
                            Login
                        </a>
                    </li>}


                    {!props.user && <li className='topbar__item'>
                        <a
                            href='/register'
                            className='topbar__link register'
                            onClick={handleClick}
                        >
                            Register
                        </a>
                    </li>}


                    {props.user && <li className='topbar__item'>
                        <a
                            href='/login'
                            className='topbar__link login'
                            onClick={handleLogout}
                        >
                            Logout
                        </a>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default Index;
