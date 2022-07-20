import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";

const SignIn = () => {
  const [inputValue, setInputValue] = useState();
  const [inputValue2, setInputValue2] = useState();
  const { userList, setUserList } = useContext(DataContext);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const thisUser = userList.find(
      (user) => user.UserName === inputValue && user.Password === inputValue2
    );
    if (thisUser) {
      thisUser.col = true;
      navigate("/");
    } else {
      thisUser.col = false;
    }
    if (!thisUser) return alert("username or password");

    // const ID = userList.findIndex((item) => item.id === item.id);
    // console.log(userList[ID].UserName);
    // if (
    //   userList[ID].UserName === inputValue &&
    //   userList[ID].Password === inputValue2
    // ) {
    //   userList[ID].col = true;
    //   navigate("/");
    // }

    setInputValue("");
    setInputValue2("");
  };
  console.log(userList);

  return (
    <div className="sign">
      <div className="sign-in">
        <label className="label-sign">Username </label>
        <input
          value={inputValue}
          className="input1"
          onChange={(e) => setInputValue(e.target.value)}
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
        <button onClick={login} className="btn">
          Sign in
        </button>
        <br />
        <h6 className="h-sign">Don't have any accounts ?</h6>
        <Link className="Link-sign-up" to={"/signUp"}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
