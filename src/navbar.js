import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./modal";
import { DataContext } from "./DataProvider";

const Navbar = () => {
  const [search, setSearch] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { db, setDb } = useContext(DataContext);

  // function searching() {
  //   userList.map((item) => {
  //     if (search === item.name) {
  //       console.log(true);
  //     }
  //   });
  // }

  return (
    <>
      <div>
        <nav className="navBar">
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
              value={search}
              className="input-search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
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
