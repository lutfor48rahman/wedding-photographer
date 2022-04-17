import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    

    if(user){
        navigate('/login');
    }

    const handleEmailBlur = (event) =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur =(event) =>{
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser =(event)=>{
        event.preventDefault();
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        if(password !== confirmPassword){
            setError('Your password does not matches!!');
            return;
        }

        if(password.length < 6){
            setError('password must be 6 charecters,,,,');
            return;
        }

        createUserWithEmailAndPassword(email,password);
        setSuccess('Successfully create your account');
        
    }

    // const handleLogin =()=>{
    //     navigate('/login');
    // }

    return (
        <div>
            <div className='form-container'>
            <div>
                <h2 className='form-title'>Signup</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" name='email' placeholder='email' required />
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" name='password' placeholder='password' required />
                    </div>
                    <div className="input-group">
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' placeholder='confirm password' required />
                    </div>
                    <p>
                        {success}
                        {error}
                    </p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;