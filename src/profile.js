import React from 'react';
import { Link, useParams } from 'react-router-dom';
import db from './db';

const Profile = () => {
    const params = useParams();
    const id = db.find(info => info.id == params.id)
    
    return ( 
        <div className='profile'>
            {
                db.map(item => { 
                   if(item.id === id.id ){
                    return(
                        <div>
                            <img src={item.url} height='200' width='150'/>

                        </div>
                    )
                    }
                })
            }
        </div>
     );
}
 
export default Profile;