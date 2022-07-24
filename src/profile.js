import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Rate from "./rate";
import Comment from "./comment";
import { DataContext } from "./DataProvider";
import Spoil from "./spoil";
import Reply from "./reply";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const { db, setDb } = useContext(DataContext);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const { darkTheme, setDarkTheme } = useContext(DataContext);
  const { commentValue, setCommentValue } = useContext(DataContext);
  const { spoiling, setSpoiling } = useContext(DataContext);
  const params = useParams();
  const thatMovie = db.db.movies.find((info) => info.id == params.id);
  const UID = () =>
    `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`;

  const themeStyle = {
    padding: "1px",
    backgroundColor: darkTheme ? "#0e0e0e" : "rgb(94, 97, 100)",
  };

  // const spoilStyle = {
  //   filter: spoiling ? "blur(3px)" : "blur(0px)",
  //   backgroundColor: "#404040",
  //   color: "rgb(205, 205, 205)",
  //   padding: "5px",
  //   marginTop: "20px",
  //   marginBottom: "20px",
  //   borderRadius: "10px",
  // };

  function onClose2() {
    setIsOpen2(false);
  }

  // function spoil() {
  //   spoiling === false ? setSpoiling(true) : setSpoiling(false);
  //   db.db.movies.filter((item) => {
  //     item.comments.filter((el) => {
  //       console.log(el.spoil);
  //     });
  //   });
  // }

  function send() {
    spoiling === true ? setIsOpen3(true) : setIsOpen3(false);
    if (commentValue === "") {
      alert("Please Write a Comment");
    } else {
      const clone = { ...db };
      clone.db.currentUser.comments.push({ messages: commentValue });
      setDb(clone);

      thatMovie.comments.push({
        messages: commentValue,
        userName: db.db.currentUser.UserName,
        admin: db.db.currentUser.admin,
        // spoil: spoiling,
        reply: [],
        id: UID(),
      });

      setCommentValue("");
      setIsOpen2(false);
    }
  }

  function addIcon() {
    setIsOpen2(true);
  }

  const handleMessageChange = (event) => {
    setCommentValue(event.target.value);
  };

  function cmtReply() {
    setIsOpen4(true);
  }

  return (
    <>
      {db.db.currentUser && (
        <div style={themeStyle}>
          {db.db.movies.map((item) => {
            if (item.id === thatMovie.id) {
              return (
                <>
                  <div className="title-name">{item.name}</div>
                  <div className="pro-nav">
                    <div className="title">{item.year}</div>
                    <div className="title">{item.age}</div>
                    <div className="title">{item.time}</div>
                    <div className="imdb">
                      <div className="imdb-label">IMDb RATING</div>
                      <div className="imdb-rate">{item.imdb}</div>
                    </div>
                  </div>
                  <div className="inner-profile1">
                    <img
                      className="profile-img"
                      src={item.url}
                      height="400"
                      width="270"
                    />
                    <video className="video" width="710" height="400" controls>
                      <source src={item.trailer} type="video/mp4" />
                    </video>
                  </div>
                  <div className="inner-profile2">
                    <Link className="genre" to={`/list/:${item.genres[0][0]}`}>
                      {item.genres[0][1]}
                    </Link>
                    <Link className="genre" to={`/list/:${item.genres[1][0]}`}>
                      {item.genres[1][1]}
                    </Link>
                    <Link
                      className={item.genres[2][0] === undefined ? "" : "genre"}
                      to={`/list/:${item.genres[2][0]}`}
                    >
                      {item.genres[2][1]}
                    </Link>
                    <div
                      className="rate-div"
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      Rate
                    </div>
                  </div>
                  <div className="profile-sl">{item.storyLine}</div>
                  <hr className="line" />
                  <div className="label">
                    <div>Director</div>
                    <div className="label-dc">{item.directors}</div>
                  </div>
                  <hr className="line" />
                  <div className="label">
                    <div>Box office</div>
                    <div className="label-dc">{item.boxOffice}</div>
                  </div>
                  <hr className="line" />
                  <div className="label">
                    <div>Distributed by</div>
                    <div className="label-dc">{item.distributedBy}</div>
                  </div>
                  <div className="title-under">
                    <div className="title-style"></div>
                    <div className="title-text">Top Cast</div>
                  </div>
                  <div className="cast-background">
                    {item.topCast.cast.map((el) => {
                      return (
                        <div className="cast">
                          <img
                            className="cast-img"
                            src={el.url}
                            height="150"
                            width="115"
                          />
                          <div className="cast-name">{el.name}</div>
                          <div className="cast-role">{el.role}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="title-under">
                    <div className="title-style"></div>
                    <div className="title-text">Comment</div>
                    <div className="add" onClick={addIcon}>
                      +
                    </div>
                  </div>
                  <Comment open2={isOpen2}>
                    <div className="u-c-modal-cmt">
                      <div className="modal-un">
                        {db.db.currentUser.UserName}
                      </div>
                      <img
                        className="close-icon"
                        onClick={onClose2}
                        src="/images/close.jpg"
                        height="10px"
                        width="10px"
                      />
                    </div>
                    <textarea
                      value={commentValue}
                      onChange={handleMessageChange}
                      className="textarea"
                    ></textarea>
                    <br />
                    {/* <div onClick={spoil} className="spoil">
                      spoil
                    </div> */}
                    <button className="send-cmt" onClick={send}>
                      send
                    </button>
                  </Comment>
                  <div className="comments">
                    <div className="comment">
                      {thatMovie.comments.map((el) => {
                        return (
                          <>
                            <div className="cmt-user">
                              <div
                                className={
                                  // el.spoil === true
                                  //   ? "spoil-comment"
                                  //   :
                                  el.admin === true
                                    ? "cmt-username-admin"
                                    : "cmt-username"
                                }
                              >
                                {el.userName}
                              </div>
                              {el.messages}
                              <div className="cmt-reply" onClick={cmtReply}>
                                Reply
                              </div>
                              <Reply
                                thisMovie={thatMovie}
                                open4={isOpen4}
                                onClose4={setIsOpen4}
                              ></Reply>
                              <div>
                                {el.reply.map((el2) => {
                                  return (
                                    <>
                                      <div className="comment-reply">
                                        <div
                                          className={
                                            // el2.admin === true ? "cmt-username-admin" :
                                            "cmt-username-reply"
                                          }
                                        >
                                          {el2.userName}
                                        </div>
                                        {el2.messages}
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                            {/* <Spoil
                              open3={isOpen3}
                              onClose3={() => {
                                setIsOpen3(false);
                                setSpoiling(false);
                              }}
                            ></Spoil> */}
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <Rate open={isOpen} onClose={() => setIsOpen(false)}></Rate>
                </>
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default Profile;
