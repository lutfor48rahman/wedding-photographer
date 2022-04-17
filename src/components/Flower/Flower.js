import React from 'react';
import './Flower.css';

const Flower = (props) => {
    console.log(props.flower);
    const {name,price,userImageURL,desc} = props.flower;
    return (
        <div className='flow'>
            <img src={userImageURL} alt="" />
            <h3>{name}</h3>
            <p>price : {price}</p>
            <p><small>{desc}</small></p>
            <button>Selecte</button>
        </div>
    );
};

export default Flower;