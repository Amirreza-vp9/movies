import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const [inputValue, setInputValue] = useState();
    const [inputValue2, setInputValue2] = useState();

    return ( 
        <div className='sign'>

            <div className='sign-in'>
                <label className='label-sign'>Username </label>
                <input value={inputValue} className='input1'
                onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <br/>
                <label className='label-sign'>Password </label>
                <input value={inputValue2} className='input2' type='password'
                onChange={(e) => setInputValue2(e.target.value)}
                ></input>
                <br/>
                <button className='btn'>Sign in</button>
                <br/>
                <h6 className='h-sign'>Don't have any accounts ?</h6>
                <Link className='Link-sign-up' to={'/signUp'}>Sign up</Link>
            </div>
            

        </div> 
    );
}
 
export default SignIn;