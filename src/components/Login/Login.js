import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';

    if (user) {
        navigate(from, { replace: true });
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        setSuccess('Successfully logged in!!!');

    }
    const handleReset = async () => {
        await sendPasswordResetEmail(email);
        toast ('email send for reset password!!');
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
                    <p className='mt-3'>
                        Forget password? <button onClick={handleReset} className='btn btn-link form-link ' >Reset Password</button>
                    </p>
                    <p>
                        New Wedding-Photographer? <Link className='form-link' to='/signup'>Create an account</Link>
                    </p>
                </div>

            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>


    );
};

export default Login;