import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './modal';

 const Navbar = () => {
    const [search, setSearch] = useState();
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <>
            <div>
                <nav className='navBar'>
                <img src="/images/movie.jpg" height='25px' width='80px'
                className='movie-img'/>
                <div className='nav-text' 
                    onClick={() => {setIsOpen(true)}}>Menu</div>
                <NavLink to={'/home'} className='nav-text'>Home</NavLink>
                <div className='search'>
                <input value={search} className='input-search'
                placeholder='Search'
                onChange={(e) => setSearch(e.target.value)}
                ></input>
                </div>
                <div className='nav-text'>WatchList</div>
                <NavLink to={'/signIn'} className='nav-text'>Sign In</NavLink>
                <NavLink to={'/owner'} className='owner-link'>Owner</NavLink>
                </nav>
                <Modal open={isOpen}
                onClose={() => setIsOpen(false)}>
                </Modal>
            </div>
        </>
    );
 }
  
 export default Navbar;