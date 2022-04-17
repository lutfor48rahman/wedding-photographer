import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ]=useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
      const location = useLocation();
    const from = location.state?.from?.pathname || '/home';

    if(user){
        navigate(from,{replace:true});
    }
    const handleEmailBlur =(event) =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur =(event) =>{
        setPassword(event.target.value);
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
        setSuccess('Successfully logged in!!!');
        
    }
   
    return (
       <div>
            <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" name='email' placeholder='your email' required />
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" name='password' placeholder='your password' required />
                    </div>
                    <p>
                        {success}
                    </p>
                    <input className='form-submit' type="submit" value="login" />
                </form>
                <p>
                    New Wedding-Photographer? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </div>
            
        </div>
        <SocialLogin></SocialLogin>
       </div>
        
        
    );
};

export default Login;