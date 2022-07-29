import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

const ContactUs = (Item) => {
  const { db, setDb } = useContext(DataContext);
  const [contactValue, setContactValue] = useState("");
  const [contactValue2, setContactValue2] = useState("");
  const [questionValue, setQuestionValue] = useState([]);
  const [answerValue, setAnswerValue] = useState([]);

  const handleMessageChange = (event) => {
    setContactValue(event.target.value);
  };

  const handleMessageChange2 = (event) => {
    setContactValue2(event.target.value);
  };

  const send = () => {
    if (contactValue !== "") {
      const clone = [...questionValue];
      clone.push({
        text: contactValue,
        user: db.db.currentUser.UserName,
        email: db.db.currentUser.Email,
      });
      setQuestionValue(clone);
      setContactValue("");
      alert("Seceed");
    }
  };

  const send2 = (Item) => {
    if (contactValue2 !== "") {
      db.db.users.filter((el) => {
        if (Item.user === el.UserName && Item.email === el.Email) {
          el.contect.filter((el2) => {
            const clone = [...answerValue];
            clone.push(el2);
            setAnswerValue(clone);
          });
        }
      });
      setContactValue2("");
      alert("Seceed");
    }
  };

  const questions = (item) => {
    db.db.users.filter((el) => {
      if (item.user === el.UserName && item.email === el.Email) {
        const clone = { ...db };
        clone.db.user.filter((el2) => {
          if (contactValue2 !== "") {
            el2.contact.push({
              text: contactValue2,
            });
          }
        });
        setDb(clone);
      }
    });
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
                {answerValue.map((item) => {
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
              {questionValue.map((item) => {
                Item = item;
                return (
                  <>
                    <div className="questions" onClick={() => questions(item)}>
                      <h5>From : {item.user}</h5>
                      <h5>Email : {item.email}</h5>
                      <div>{item.text}</div>
                    </div>
                  </>
                );
              })}
              <textarea
                value={contactValue2}
                onChange={handleMessageChange2}
                className="contactUs-textarea"
              ></textarea>
              <br />
              <button className="contactUs-btn" onClick={send2}>
                Send
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ContactUs;
