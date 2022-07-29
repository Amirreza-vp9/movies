import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const { db, setDb } = useContext(DataContext);
  const navigate = useNavigate();

  function removeWatchList(i) {
    let answer = window.confirm(
      "Are you sure to remove this movie from your watchList ?"
    );
    if (answer) {
      const clone = { ...db };
      clone.db.currentUser.WatchList.splice(i, 1);
      setDb(clone);
      console.log(db.db.currentUser.WatchList);
    }
  }

  return (
    <>
      {db.db.currentUser && (
        <>
          <div className="category">
            {db.db.currentUser.WatchList.map((el, i) => {
              return (
                <>
                  <div className="category-div">
                    <div className="category-name">{el.name}</div>
                    <div
                      className="remove-watchList"
                      onClick={() => removeWatchList(i)}
                    >
                      -
                    </div>
                    <div
                      style={{
                        height: "350px",
                        width: "250px",
                        backgroundColor: "gold",
                        textAlign: "center",
                      }}
                    >
                      {el.public === true ? (
                        <div
                          style={{
                            marginBottom: "-100px",
                            paddingTop: "80px",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Public
                        </div>
                      ) : (
                        <div
                          style={{
                            marginBottom: "-100px",
                            paddingTop: "80px",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Private
                        </div>
                      )}
                      <div
                        style={{
                          fontSize: "100px",
                          paddingTop: "80px",
                          cursor: "default",
                        }}
                      >
                        {el.movie.length}
                      </div>
                      <button
                        onClick={() => {
                          const clone = { ...db };
                          clone.db.currentWatchList = el;
                          setDb(clone);
                          navigate(`/watchList2/${el.id}`);
                        }}
                        style={{
                          cursor: "pointer",
                          borderRadius: "20px",
                          padding: "5px",
                          textAlign: "center",
                          fontSize: "17px",
                          width: "200px",
                          backgroundColor: "#202020",
                          color: "whitesmoke",
                        }}
                      >
                        Show
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
            {db.db.users.map((item) => {
              return (
                <>
                  {item.id === db.db.currentUser.id ? (
                    ""
                  ) : (
                    <>
                      {item.WatchList.map((item2) => {
                        return (
                          <>
                            {item2.public === true ? (
                              <div className="category-div">
                                <div className="category-name">
                                  {item2.name}
                                </div>
                                <div
                                  style={{
                                    height: "350px",
                                    width: "250px",
                                    backgroundColor: "gold",
                                    textAlign: "center",
                                  }}
                                >
                                  <div
                                    style={{
                                      marginBottom: "-50px",
                                      paddingTop: "20px",
                                      fontSize: "20px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    From {item.UserName}
                                  </div>
                                  {item2.public === true ? (
                                    <div
                                      style={{
                                        marginBottom: "-100px",
                                        paddingTop: "80px",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Public
                                    </div>
                                  ) : (
                                    <div
                                      style={{
                                        marginBottom: "-100px",
                                        paddingTop: "80px",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Private
                                    </div>
                                  )}
                                  <div
                                    style={{
                                      fontSize: "100px",
                                      paddingTop: "80px",
                                      cursor: "default",
                                    }}
                                  >
                                    {item2.movie.length}
                                  </div>
                                  <button
                                    onClick={() => {
                                      const clone = { ...db };
                                      clone.db.currentWatchList = item2;
                                      setDb(clone);
                                      navigate(`/watchList2/${item2.id}`);
                                    }}
                                    style={{
                                      cursor: "pointer",
                                      borderRadius: "20px",
                                      padding: "5px",
                                      textAlign: "center",
                                      fontSize: "17px",
                                      width: "200px",
                                      backgroundColor: "#202020",
                                      color: "whitesmoke",
                                    }}
                                  >
                                    Show
                                  </button>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </>
                        );
                      })}
                    </>
                  )}
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default WatchList;
