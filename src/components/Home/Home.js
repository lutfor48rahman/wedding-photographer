import React from 'react';
import banner1 from '../images/banner1.jpg';

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
            <div className='m-3 p-3'>
            <h1>Photographer Services</h1>
            </div>

        </div>
    );
};

export default Home;