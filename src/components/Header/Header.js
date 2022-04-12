import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);
    const handelSineOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt='' />
                <div className='topnav'>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/orders'>Orders</Link>
                    <Link to='/signup'>Sign Up</Link>
                    {/* <p>{user.displayName}</p> */}
                    {
                        user ? <button onClick={handelSineOut}>Sign Out</button> : <Link to='/login'>Log In</Link>
                    }
                </div>
            </nav>
            {
                console.log(user)
            }
            <h1>{user?.uid ? user.email : ''}</h1>
            <p>{user?.uid ? user.providerId : ''}</p>
        </div>
    );
};

export default Header;