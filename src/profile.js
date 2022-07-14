import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import db from './db';
import Rate from './rate';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const params = useParams();
    const id = db.find(info => info.id == params.id)
    
    return ( 
        <div className='profile'>
            {
                db.map(item => { 
                   if(item.id === id.id ){
                    return(
                        <>
                        <div className='title-name'>{item.name}</div>
                        <div className='pro-nav'>
                            <div className='title'>{item.year}</div>
                            <div className='title'>{item.age}</div>
                            <div className='title'>{item.time}</div>
                            <div className='imdb'>
                            <div className='imdb-label'>IMDb RATING</div>
                            <div className='imdb-rate'>{item.imdb}</div>
                            </div>
                        </div>
                        <div className='inner-profile1'>
                            <img className='profile-img' src={item.url} height='400' width='270'/>
                            <video className='video' width="710" height="400" controls >
                            <source src={item.trailer} type="video/mp4"/>
                            </video>
                        </div>
                        <div className='inner-profile2'>
                            <div className='genre'>{item.genre1}</div>
                            <div className='genre'>{item.genre2}</div>
                            <Link className='genre' to={'/Scifi'}>{item.genre3}</Link>
                            <div className='rate-div' 
                            onClick={() => {setIsOpen(true)}}>Rate</div>
                        </div>
                        <div className='profile-sl'>{item.storyLine}</div>
                        <hr className='line'/>
                        <div className='label'>
                            <div>Director</div>
                            <div className='label-dc'>{item.directors}</div>
                        </div>
                        <hr className='line'/>
                        <div className='label'>
                            <div>Box office</div>
                            <div className='label-dc'>{item.boxOffice}</div>
                        </div>
                        <hr className='line'/>
                        <div className='label'>
                            <div>Distributed by</div>
                            <div className='label-dc'>{item.distributedBy}</div>
                        </div>
                        <div className='topCast'>
                            <div className='topCast-style'></div>
                            <div className='topCast-text'>Top Cast</div>
                        </div>
                        <div className='cast-background'>
                        {item.topCast.cast.map(el => {
                            return(
                                <div className='cast'>
                                <img className='cast-img' src={el.url} height='150' width='115'/>
                                <div className='cast-name'>{el.name}</div>
                                <div className='cast-role'>{el.role}</div>
                                </div>
                            )
                        })
                        }
                        </div>
                        </>
                    )
                    }
                })
            }
            <Rate open={isOpen}
            onClose={() => setIsOpen(false)}>
            </Rate>
        </div>
     );
}
 
export default Profile;