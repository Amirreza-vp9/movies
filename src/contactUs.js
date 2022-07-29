import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

const ContactUs = () => {
  const { db, setDb } = useContext(DataContext);
  const [contactValue, setContactValue] = useState("");
  const [contactValue2, setContactValue2] = useState("");

  const handleMessageChange = (event) => {
    setContactValue(event.target.value);
  };

  const handleMessageChange2 = (event) => {
    setContactValue2(event.target.value);
  };

  const send = () => {
    if (contactValue !== "") {
      const clone = { ...db };
      clone.db.users.filter((item) => {
        if (item.admin === true) {
          item.contact.push({
            text: contactValue,
            user: db.db.currentUser.UserName,
            email: db.db.currentUser.Email,
          });
          setDb(clone);
          setContactValue("");
          alert("Seceed");
        }
      });
    }
  };

  const send2 = (item, i) => {
    if (contactValue2 !== "") {
      const clone = { ...db };
      clone.db.users.filter((el) => {
        if (item.user === el.UserName && item.email === el.Email) {
          el.contact.push({
            text: contactValue2,
          });
        }
        if (el.admin === true) {
          el.contact.splice(i, 1);
        }
      });
      setDb(clone);
      setContactValue2("");
      alert("Seceed");
    }
  };

  return (
    <>
      {db.db.currentUser && (
        <>
          {db.db.currentUser.admin === false ? (
            <div className="contactUs">
              <h2 className="contactUs-message">
                here you can send your message to admin
              </h2>
              <div className="contactUs-box">
                <h5>{db.db.currentUser.UserName}</h5>
                {db.db.currentUser.contact.map((item) => {
                  return (
                    <>
                      <div className="questions">
                        <h5>From : Admin</h5>
                        <div>{item.text}</div>
                      </div>
                    </>
                  );
                })}
                <textarea
                  value={contactValue}
                  onChange={handleMessageChange}
                  className="contactUs-textarea"
                ></textarea>
                <br />
                <button className="contactUs-btn" onClick={send}>
                  Send
                </button>
              </div>
            </div>
          ) : (
            <div className="contactUs-admin-box">
              {db.db.currentUser.contact.map((item, i) => {
                return (
                  <>
                    <div className="questions">
                      <div>From : {item.user}</div>
                      <div>Email : {item.email}</div>
                      <div>{item.text}</div>
                      <textarea
                        value={contactValue2}
                        onChange={handleMessageChange2}
                        className="contactUs-textarea"
                      ></textarea>
                      <br />
                      <button
                        className="contactUs-btn"
                        onClick={() => send2(item, i)}
                      >
                        Send
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ContactUs;
