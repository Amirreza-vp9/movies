import React, { useState } from "react";
import Category from "./category";
import Category2 from "./category2";

export default function Modal({ open, onClose, open2, onClose2 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  if (!open) return null;

  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <div className="modal">
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
      </div>
      <Category open={isOpen} onClose={() => setIsOpen(false)}></Category>
      <Category2 open2={isOpen2} onClose2={() => setIsOpen2(false)}></Category2>
    </>
  );
}
