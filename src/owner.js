import React from 'react';
import { Link } from 'react-router-dom';

const Owner = () => {
    return ( 
        <div className='owner-bg'>
            <Link className='home-link' to={'/'}>Home</Link>
            <div className='owner-name'><h1>Amirreza Alizadeh</h1></div>
            <div className='owner'>
                <img className='owner-image'
                src='./images/Amirreza-i.jpg' height='600px' width='520px'/>
            </div>
        </div>
     );
}
 
export default Owner;