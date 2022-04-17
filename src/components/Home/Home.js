import React, { useEffect, useState } from 'react';
import Flower from '../Flower/Flower';
import banner1 from '../images/banner1.jpg';
import './Home.css';

const Home = () => {
    const [flowers,setFlowers] = useState([]);

    useEffect(()=>{
        fetch('photographer.json')
        .then(res => res.json())
        .then(data=>setFlowers(data));
    },[])
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide mt-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='d-block w-100 h-25' src={banner1} alt="" />
                    </div>
                    
                </div>
            </div>
            <div className='m-3 p-3'>
            <h1>Photographer Services</h1>
           <div className='flower'>
           {
                flowers.map(flower=> <Flower key={flower.id}
                flower={flower}></Flower>)
            }
           </div>
            </div>

        </div>
    );
};

export default Home;