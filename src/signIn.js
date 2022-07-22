import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";

const SignIn = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const { db, setDb } = useContext(DataContext);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const thisUser = db.db.users.find(
      (user) => user.UserName === inputValue && user.Password === inputValue2
    );
    if (thisUser) {
      const clone = { ...db };
      clone.db.currentUser = thisUser;

      setDb(clone);

      console.log(db.db.currentUser);
      navigate("/");
    }
    if (!thisUser) return alert("Username or Password is wrong !");

    setInputValue("");
    setInputValue2("");
  };

  return (
    <>
      <div className="body-sign">
        <div className="login-box">
          <h2>Login</h2>
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
                type="password"
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
              />
              <label>Password</label>
            </div>
            <Link to={"/home"} onClick={login} className="a-submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </Link>
          </form>
          <h6 className="h-sign">Don't have any accounts ?</h6>
          <Link className="Link-sign-up" to={"/signUp"}>
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
