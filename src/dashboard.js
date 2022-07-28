import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

const Dashboard = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const { db, setDb } = useContext(DataContext);

  console.log(db.db.users);

  function edit(i) {
    const clone = { ...db };
    clone.db.users[i].col = true;
    setDb(clone);
  }

  function cancle(i) {
    let answer = window.confirm("Are you sure to cancle changes ?");
    if (answer) {
      const clone = { ...db };
      clone.db.users[i].col = false;
      setDb(clone);
    }
  }

  function submit(i) {
    let answer = window.confirm("Are you sure to submit changes ?");
    if (answer) {
      const clone = { ...db };
      clone.db.users[i].UserName = inputValue;
      clone.db.users[i].Password = inputValue2;
      clone.db.users[i].Email = inputValue3;
      clone.db.users[i].Phone = inputValue4;
      clone.db.users[i].id = inputValue5;
      clone.db.users[i].col = false;
      setDb(clone);
      setInputValue("");
      setInputValue2("");
      setInputValue3("");
      setInputValue4("");
      setInputValue5("");
    }
  }

  function MakeAdmin(i) {
    let answer = window.confirm("Are you sure to make this user an admin ?");
    if (answer) {
      const clone = { ...db };
      clone.db.users[i].admin = true;
      setDb(clone);
    }
  }

  function RemoveAdmin(i) {
    let answer = window.confirm("Are you sure to make this admin a user ?");
    if (answer) {
      const clone = { ...db };
      clone.db.users[i].admin = false;
      setDb(clone);
    }
  }

  function removeUser(i) {
    let answer = window.confirm("Are you sure to remove this user ?");
    if (answer) {
      const clone = { ...db };
      clone.db.users.splice(i, 1);
      setDb(clone);
    }
  }

  return (
    <>
      {db.db.currentUser && db.db.currentUser.admin === true ? (
        <>
          <div className="dashboard">
            {db.db.users.map((item, i) => {
              return (
                <>
                  <div className="dashboard-list">
                    <div className="dashboard-list-up-btn">
                      {item.admin === false ? (
                        <div
                          className="dashboard-list-make-admin"
                          onClick={() => MakeAdmin(i)}
                        >
                          Make Admin
                        </div>
                      ) : (
                        ""
                      )}
                      {item.admin === true ? (
                        <div
                          className="dashboard-list-remove-admin"
                          onClick={() => RemoveAdmin(i)}
                        >
                          Remove Admin
                        </div>
                      ) : (
                        ""
                      )}

                      <div
                        className="dashboard-inner-list-edit-btn"
                        onClick={() => edit(i)}
                      >
                        Edit
                      </div>
                    </div>
                    <div>Username</div>
                    <div className="dashboard-inner-list">
                      {item.col === false ? (
                        <div className="dashboard-inner-list-text">
                          {item.UserName}
                        </div>
                      ) : (
                        <input
                          className="dashboard-inner-list-input"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                        />
                      )}
                    </div>
                    <div>Password</div>
                    <div className="dashboard-inner-list">
                      {item.col === false ? (
                        <div className="dashboard-inner-list-text">
                          {item.Password}
                        </div>
                      ) : (
                        <input
                          className="dashboard-inner-list-input"
                          value={inputValue2}
                          onChange={(e) => setInputValue2(e.target.value)}
                        />
                      )}
                    </div>
                    <div>Email</div>
                    <div className="dashboard-inner-list">
                      {item.col === false ? (
                        <div className="dashboard-inner-list-text">
                          {item.Email}
                        </div>
                      ) : (
                        <input
                          className="dashboard-inner-list-input"
                          value={inputValue3}
                          onChange={(e) => setInputValue3(e.target.value)}
                        />
                      )}
                    </div>
                    <div>Phone</div>
                    <div className="dashboard-inner-list">
                      {item.col === false ? (
                        <div className="dashboard-inner-list-text">
                          {item.Phone}
                        </div>
                      ) : (
                        <input
                          className="dashboard-inner-list-input"
                          value={inputValue4}
                          onChange={(e) => setInputValue4(e.target.value)}
                        />
                      )}
                    </div>
                    <div>id</div>
                    <div className="dashboard-inner-list">
                      {item.col === false ? (
                        <div className="dashboard-inner-list-text">
                          {item.id}
                        </div>
                      ) : (
                        <input
                          className="dashboard-inner-list-input"
                          value={inputValue5}
                          onChange={(e) => setInputValue5(e.target.value)}
                        />
                      )}
                    </div>
                    {item.col === true ? (
                      <div className="dashboard-inner-list-under-btn">
                        <div
                          className="dashboard-inner-list-cancle-btn"
                          onClick={() => cancle(i)}
                        >
                          Cancle
                        </div>
                        <div
                          className="dashboard-inner-list-submit-btn"
                          onClick={() => submit(i)}
                        >
                          Submit
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div
                      className="dashboard-inner-list-submit-btn"
                      onClick={() => removeUser(i)}
                    >
                      Remove user
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Dashboard;
