import React, { useState, useContext } from "react";
import Category from "./category";
import Category2 from "./category2";
import { DataContext } from "./DataProvider";
import { NavLink } from "react-router-dom";

export default function Modal({ open, onClose, open2, onClose2 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const { db, setDb } = useContext(DataContext);
  if (!open) return null;

  function logOut() {
    let answer = window.confirm("Are you sure to Log out ?");
    if (answer) {
      const clone = { ...db };
      clone.db.currentUser = null;
      setDb(clone);
    }
  }

  return (
    <>
      {db.db.currentUser ? (
        <>
          <div className="backdrop" onClick={onClose}></div>
          <div className="modal">
            {db.db.currentUser.admin === true && (
              <>
                <NavLink to={"/dashboard"} className="C-link">
                  Dashboard
                </NavLink>
                <br />
                <br />
              </>
            )}
            {db.db.currentUser.admin === true && (
              <>
                <NavLink to={"/setMovie"} className="C-link">
                  Set Movie/TV Series
                </NavLink>
                <br />
                <br />
              </>
            )}
            <div
              className="C-link"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Movies
            </div>
            <br />
            <div
              className="C-link"
              onClick={() => {
                setIsOpen2(true);
              }}
            >
              TV Series
            </div>
            <br />
            <NavLink to={"/contactUs"} className="C-link">
              Contact us
            </NavLink>
            <br />
            <br />
            <div className="C-link" onClick={logOut}>
              Log out
            </div>
          </div>
          <Category open={isOpen} onClose={() => setIsOpen(false)}></Category>
          <Category2
            open2={isOpen2}
            onClose2={() => setIsOpen2(false)}
          ></Category2>
        </>
      ) : (
        ""
      )}
    </>
  );
}
