import React, { useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { DataContext } from "./DataProvider";

const SignUp = () => {
  const [inputValue, setInputValue] = useState();
  const [inputValue2, setInputValue2] = useState();
  const [inputValue3, setInputValue3] = useState();
  const [inputValue4, setInputValue4] = useState();
  const [userList, setUserList] = useContext(DataContext);
  
  const addUser = (e) => {
    e.preventDefault();
    setUserList([...userList,
      {
        UserName: inputValue,
        Email: inputValue3,
        Phone: inputValue4,
        Password: inputValue2,
      },
    ]);
    setInputValue('');
    setInputValue3('');
    setInputValue4('');
    setInputValue2('');
  };

  console.log(userList);

  return (
    <div className="sign">
      <div className="sign-up">
        <label className="label-sign">Username </label>
        <input
          value={inputValue}
          className="input1"
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <br />
        <label className="label-sign">Email </label>
        <input
          value={inputValue3}
          className="input1"
          onChange={(e) => setInputValue3(e.target.value)}
        ></input>
        <br />
        <label className="label-sign">Phone </label>
        <input
          value={inputValue4}
          className="input1"
          type="number"
          onChange={(e) => setInputValue4(e.target.value)}
        ></input>
        <br />
        <label className="label-sign">Password </label>
        <input
          value={inputValue2}
          className="input2"
          type="password"
          onChange={(e) => setInputValue2(e.target.value)}
        ></input>
        <br />
        <button onClick={addUser} className="btn">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
