import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogin=()=>{
        navigate('/login');
    }

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='header'>
            <div >
                <Link to='/home'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
                <Link to ='/checkout'>Check Out</Link>
                {
                    user ?
                    <button className='signout' onClick={handleSignOut}>Signout</button>
                    :
                    <Link to="/login" onClick={handleLogin}>Login</Link>}
            </div>
        </nav>
    );
};

export default Header;