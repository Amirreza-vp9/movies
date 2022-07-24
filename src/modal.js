import React, { useState, useContext } from "react";
import Category from "./category";
import Category2 from "./category2";
import { DataContext } from "./DataProvider";

export default function Modal({ open, onClose, open2, onClose2 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const { db, setDb } = useContext(DataContext);
  if (!open) return null;

  function logOut() {
    const clone = { ...db };
    clone.db.currentUser.col = false;
    setDb(clone);
    console.log(db.db.users);
  }

  return (
    <>
      {db.db.currentUser.col === true ? (
        <>
          <div className="backdrop" onClick={onClose}></div>
          <div className="modal">
            {db.db.currentUser.admin === true && (
              <div className="C-link">Dashboard</div>
            )}
            <br />
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
              TV Shows
            </div>
            <br />
            <div className="C-link">Contact us</div>
            <br />
            {db.db.users.map((item, i) => {
              return (
                <>
                  <div className="C-link" onClick={() => logOut(i)}>
                    Log out
                  </div>
                </>
              );
            })}
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
