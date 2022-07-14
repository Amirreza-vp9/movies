import React from 'react';
import { Link } from 'react-router-dom';

export default function Category({open, onClose}) {
    if (!open) return null;
    return(
        <>
        <div className='backdropC' onClick={onClose}></div>
        <div className='modalC'>
            <div className='C-title-link'>Movies :</div>
            <br/>
            <div className='C-link'
                onClick={onClose}>Top Rated</div>
            <br/>
            <Link className='C-link' to={'/Scifi'}
                onClick={onClose}
            >Sci-fi</Link>
            <br/>
            <br/>
            <Link className='C-link' to={'/action'}
                onClick={onClose}>Action</Link>
            <br/>
            <br/>
            <Link className='C-link' to={'/Drama'}
                onClick={onClose}
            >Drama</Link>
            <br/>
            <br/>
            <div className='C-link'
                onClick={onClose}>Thriller</div>
            <br/>
            <div className='C-link'
                onClick={onClose}>Biography</div>
            <br/>
            <div className='C-link'
                onClick={onClose}>War</div>
            <br/>
            <div className='C-link'
                onClick={onClose}>Western</div>
            <br/>
            <div className='C-link'
                onClick={onClose}>Anime</div>
            <br/>
            <Link className='C-link' to={'/Animation'}
                onClick={onClose}
            >Animation</Link>
        </div>
        </>
    );
};