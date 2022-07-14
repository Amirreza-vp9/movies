import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "./DataProvider";

const SignIn = () => {
    const [inputValue, setInputValue] = useState();
    const [inputValue2, setInputValue2] = useState();
    // const [check, setCheck] = useState(false)
    const [userList, setUserList] = useContext(DataContext);

    const login = (e) => {
        e.preventDefault();
        let check = false;
        userList.filter(item => {
        if(item.UserName === inputValue && item.Password === inputValue2){
            check = true;
        }})
        console.log(check);
        setInputValue('');
        setInputValue2('');
        };

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
                <button onClick={login} 
                className='btn'>Sign in</button>
                <br/>
                <h6 className='h-sign'>Don't have any accounts ?</h6>
                <Link className='Link-sign-up' to={'/signUp'}>Sign up</Link>
            </div>
            

        </div> 
    );
}
 
export default SignIn;