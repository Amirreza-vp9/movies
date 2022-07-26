import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

const Reply = ({ open4, onClose4, thisMovie, index }) => {
  const [replyValue, setReplyValue] = useState("");
  const { db, setDb } = useContext(DataContext);
  if (!open4) return null;

  function sendReply() {
    if (replyValue === "") {
      alert("Please write your reply");
    } else {
      thisMovie.comments[index].reply.push({
        messages: replyValue,
        userName: db.db.currentUser.UserName,
        admin: db.db.currentUser.admin,
      });
      onClose4(false);
      setReplyValue("");
    }
  }

  function closeIcon() {
    thisMovie.comments.filter((item) => {
      item.col = false;
    });
    onClose4(false);
  }

  const handleMessageChange2 = (event) => {
    setReplyValue(event.target.value);
  };

  return (
    <>
      <div className="reply-modal">
        <div className="modal-un-reply">{db.db.currentUser.UserName}</div>
        <img
          className="close-icon-reply"
          onClick={closeIcon}
          src="/images/close.jpg"
          height="10px"
          width="10px"
        />
        <textarea
          value={replyValue}
          onChange={handleMessageChange2}
          className="textarea-reply"
        ></textarea>
        <div className="send-cmt-reply" onClick={sendReply}>
          send
        </div>
      </div>
    </>
  );
};

export default Reply;
