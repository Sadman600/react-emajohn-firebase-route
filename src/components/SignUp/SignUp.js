import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    if (user) {
        navigate('/shop');
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two password did not match');
            return
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleCreateUser} className='container'>
                <h1>Sign Up</h1>

                <label htmlFor="email"><b>Email</b></label>
                <input onBlur={handleEmailBlur} type="text" placeholder="Enter Email" name="email" required></input>

                <label htmlFor="psw"><b>Password</b></label>
                <input onBlur={handlePasswordBlur} type="password" placeholder="Enter Password" name="psw" required></input>

                <label htmlFor="confirm-psw"><b>Confirm Password</b></label>
                <input onBlur={handleConfirmPasswordBlur} type="password" placeholder="Enter Confirm Password" name="confirm-psw" required></input>
                <p className='error'>{error}</p>
                <button type="submit" className="btn">Sign Up</button>
                <p>All ready have an account? <Link to='/login'>Log in</Link></p>
                <hr />or
                <button type="submit" className="btn">Continue with Google</button>
            </form>

        </div>
    );
};

export default SignUp;