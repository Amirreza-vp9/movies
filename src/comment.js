import React from 'react';

export default function Comment({open2, children}) {
    if (!open2) return null;
    
    return(
        <>
        <div className='backdrop-cmt'></div>
        <div className='modal-cmt'>
            {children}
        </div>
        </>
    );
};