import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from './image.jpg';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement =
          <div>
            <p>Error: {error.message}</p>
            return
          </div>
        
      }

      if(user){
        navigate('/home');
      }
    return (
        <div className='social'>
            <button className='button1' onClick={()=> signInWithGoogle()}>
                <img src={google} alt="" />
                <span>Google sign in</span>
            </button>
            {errorElement}
        </div>
    );
};

export default SocialLogin;