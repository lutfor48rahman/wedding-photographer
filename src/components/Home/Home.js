import { Button } from 'bootstrap';
import { Carousel } from 'bootstrap';
import React from 'react';
import banner1 from '../images/banner1.jpg';
import banner3 from '../images/banner3.jpg';

const Home = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide mt-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='d-block w-100 h-25' src={banner1} alt="" />
                    </div>
                    
                </div>
            </div>
            <h1>This is home page</h1>

        </div>
    );
};

export default Home;