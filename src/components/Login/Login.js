import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [signInWithEmailAndPassword, error, loading, user] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleSignInWithEmailAndPassword = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='login-container'>
            <form onSubmit={handleSignInWithEmailAndPassword} className='container'>
                <h1>Login</h1>

                <label htmlFor="email"><b>Email</b></label>
                <input onBlur={handleEmailBlur} type="text" placeholder="Enter Email" name="email" required></input>

                <label htmlFor="psw"><b>Password</b></label>
                <input onBlur={handlePasswordBlur} type="password" placeholder="Enter Password" name="psw" required></input>
                <p className='error'>{error?.message}</p>
                {
                    loading && <p>loading....</p>
                }
                <button type="submit" className="btn">Login</button>
                <p>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
                <hr />or
                <button type="submit" className="btn">Continue with Google</button>
            </form>

        </div>
    );
};

export default Login;