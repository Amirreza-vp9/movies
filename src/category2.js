import React from 'react';
import { Link as div } from 'react-router-dom';

export default function Category2({open2, onClose2}) {
    if (!open2) return null;
    return(
        <>
        <div className='backdropC' onClick={onClose2}></div>
        <div className='modalC-2'>
            <div className='C-title-link'>TV Shows :</div>
            <br/>
            <div className='C-link'
                onClick={onClose2}>Top Rated</div>
            <br/>
            <div className='C-link' to={'/Scifi'}
                onClick={onClose2}
            >Sci-fi</div>
            <br/>
            <div className='C-link' to={'/Drama'}
                onClick={onClose2}
            >Drama</div>
            <br/>
            <div className='C-link' to={'/Drama'}
                onClick={onClose2}
            >Anime</div>
            <br/>
            <div className='C-link' to={'/Animation'}
                onClick={onClose2}
            >Animation</div>
        </div>
        </>
    );
};