import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Flower.css';

const Flower = (props) => {
    const navigate = useNavigate();
    const {name,price,userImageURL,desc} = props.flower;
    return (
        <div className='flow'>
            <img src={userImageURL} alt="" />
            <h3>{name}</h3>
            <p>price : {price}</p>
            <p><small>{desc}</small></p>
            <button onClick={()=>navigate('/checkout')}>Selecte</button>
        </div>
    );
};

export default Flower;