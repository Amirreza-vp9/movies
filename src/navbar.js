import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./modal";
import { DataContext, useThemeUpdate } from "./DataProvider";

const Navbar = () => {
  const [search, setSearch] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { db, setDb } = useContext(DataContext);
  const { darkTheme, setDarkTheme } = useContext(DataContext);
  const toggleTheme = useThemeUpdate();

  const themeStyle = {
    marginTop: "0",
    backgroundImage: darkTheme
      ? "-webkit-linear-gradient(left,#1a1a1a 0%,rgb(255, 234, 0) 50%,#1a1a1a 100%)"
      : "-webkit-linear-gradient(left,#b7b7b7 0%,rgb(255, 234, 0) 50%,#b7b7b7 100%)",
    display: "inline-flex",
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "100%",
  };

  const searchStyle = {
    backgroundColor: darkTheme ? "rgb(21, 21, 21)" : "whitesmoke",
    margin: "0px 0px 0px 10px",
    border: "0 solid",
    borderRadius: "5px",
    padding: "5px 10px 5px 10px",
    width: "500px",
    color: darkTheme ? "whitesmoke" : "rgb(21, 21, 21)",
  };

  // function searching() {
  //   userList.map((item) => {
  //     if (search === item.name) {
  //       console.log(true);
  //     }
  //   });
  // }

  // function theme() {
  //   db.db.currentUser.col = !db.db.currentUser.col;
  // }

  return (
    <>
      <div>
        <nav style={themeStyle}>
          <input type="checkbox" id="switch" className="checkbox" />
          <label htmlFor="switch" className="toggle" onClick={toggleTheme}>
            """"""
          </label>
          <img
            src="/images/movie.jpg"
            height="25px"
            width="80px"
            className="movie-img"
          />
          <div
            className="nav-text"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {db.db.currentUser.col === true ? "Menu" : ""}
          </div>

          <NavLink to={"/"} className="nav-text">
            Home
          </NavLink>
          <div className="search">
            <input
              value={search}
              style={searchStyle}
              id="input-search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
          <NavLink to={"/watchList"} className="nav-text">
            {db.db.currentUser.col === true ? "WatchList" : ""}
          </NavLink>
          <NavLink to={"/signIn"} className="nav-text">
            Sign In
          </NavLink>
          <NavLink to={"/owner"} className="owner-link">
            Owner
          </NavLink>
        </nav>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div>
    </>
  );
};

export default Navbar;
