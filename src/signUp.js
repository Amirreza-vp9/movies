import React, { useState, useContext, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";

const SignUp = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const { db, setDb } = useContext(DataContext);
  const navigate = useNavigate();

  const UID = () =>
    `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`;

  const addUser = (e) => {
    e.preventDefault();
    const clone = { ...db };
    if (
      inputValue === "" ||
      inputValue2 === "" ||
      inputValue3 === "" ||
      inputValue4 === ""
    ) {
      alert("Please signUp");
    } else {
      clone.db.users.push({
        UserName: inputValue,
        Email: inputValue3,
        Phone: inputValue4,
        Password: inputValue2,
        col: false,
        admin: false,
        comments: [],
        id: UID(),
        WatchList: [],
      });
      setDb(clone);
      navigate("/signIn");
    }

    setInputValue("");
    setInputValue3("");
    setInputValue4("");
    setInputValue2("");
    // userList.filter(item => {
    //   if(item.UserName ===)
    // })
  };

  return (
    <>
      <div className="body-sign">
        <div className="login-box">
          <h2>Sign up</h2>
          <form>
            <div className="user-box">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue3}
                onChange={(e) => setInputValue3(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="number"
                value={inputValue4}
                onChange={(e) => setInputValue4(e.target.value)}
              />
              <label>Phone</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
              />
              <label>Password</label>
            </div>
            <Link onClick={addUser} to={"/signIn"} className="a-submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
