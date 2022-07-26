import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "./modal";
import { DataContext, useThemeUpdate } from "./DataProvider";

const Navbar = () => {
  const { searchValue, setSearchValue } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const { db, setDb } = useContext(DataContext);
  const { darkTheme, setDarkTheme } = useContext(DataContext);
  const toggleTheme = useThemeUpdate();
  const navigate = useNavigate();

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

  function search(item) {
    navigate(`/profile/${item.id}`);
    setSearchValue("");
  }

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
            {db.db.currentUser ? "Menu" : ""}
          </div>
          <NavLink to={"/"} className="nav-text">
            Home
          </NavLink>
          <div className="search">
            <input
              value={searchValue}
              style={searchStyle}
              id="input-search"
              placeholder="Search"
              onChange={(e) => setSearchValue(e.target.value)}
            ></input>
          </div>
          {searchValue === "" ? (
            ""
          ) : (
            <div className="searchResult-div">
              {db.db.movies
                .filter((el) => {
                  return el.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((item) => {
                  return (
                    <>
                      <div
                        className="searchResult"
                        onClick={() => search(item)}
                      >
                        <img
                          src={item.url}
                          width="70"
                          height="100"
                          style={{ borderRadius: "10px" }}
                        />
                        <div style={{ marginLeft: "10px" }}>
                          <div>{item.name}</div>
                          <div>{item.imdb}</div>
                          <div>{item.storyLine}</div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          )}
          <NavLink to={"/watchList"} className="nav-text">
            {db.db.currentUser ? "WatchList" : ""}
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
