import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import Comment from "./comment";
import { DataContext } from "./DataProvider";
import Reply from "./reply";
import * as BsIcons from "react-icons/bs";
import Spoil from "./spoil";

const Profile = ({ index00, element00 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const { db, setDb } = useContext(DataContext);
  const [isOpen4, setIsOpen4] = useState(false);
  const { darkTheme, setDarkTheme } = useContext(DataContext);
  const { commentValue, setCommentValue } = useContext(DataContext);
  const params = useParams();
  const thatMovie = db.db.movies.find((info) => info.id == params.id);
  const UID = () =>
    `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`;

  const themeStyle = {
    padding: "1px",
    backgroundColor: darkTheme ? "#0e0e0e" : "rgb(94, 97, 100)",
  };

  function onClose2() {
    setIsOpen2(false);
  }

  function send() {
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
        col: false,
        spoil: false,
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

  function cmtReply(el) {
    setIsOpen4(true);
    thatMovie.comments.filter((item) => {
      if (item.id === el.id) {
        item.col = true;
      }
    });
  }

  function removeCmt(i, index0) {
    let answer = window.confirm("Are you sure ?");
    if (answer) {
      const clone = { ...db };
      clone.db.movies[index0].comments.splice(i, 1);
      setDb(clone);
    }
  }

  function addWatchList() {
    const clone = { ...db };
    clone.db.currentUser.WatchList.push(thatMovie);
    setDb(clone);
    console.log(db.db.currentUser.WatchList);
    alert("Succeed");
  }

  const ratingChanged = (newRating) => {
    const clone = { ...db };
    thatMovie.rate.push(newRating);
    clone.db.currentUser.movies[index00].rate.push(newRating);
    setDb(clone);
    let sum = 0;
    thatMovie.rate.forEach((item) => {
      sum += item;
    });
    let avg = sum / thatMovie.rate.length;
    thatMovie.rateResult = avg.toFixed(2);
  };

  // function spoil(element00) {
  //   isOpen === false ? setIsOpen(true) : setIsOpen(false);
  //   const clone = { ...db };
  //   if (isOpen === false) {
  //     clone.db.movies[index00].comments.filter((item) => {
  //       if (item.id === element00.id) {
  //         item.spoil = true;
  //       }
  //     });
  //   } else {
  //     clone.db.movies[index00].comments.filter((item) => {
  //       if (item.id === element00.id) {
  //         item.spoil = false;
  //       }
  //     });
  //   }
  //   setDb(clone);
  //   console.log(element00);
  // }

  return (
    <>
      {db.db.currentUser && (
        <div style={themeStyle}>
          {db.db.movies.map((item, index0) => {
            if (item.id === thatMovie.id) {
              index00 = index0;
              return (
                <>
                  <div className="title-name">{item.name}</div>
                  <div className="pro-nav">
                    <div className="title">{item.year}</div>
                    <div className="title">{item.age}</div>
                    <div className="title">{item.time}</div>
                    <div className="title">{item.type}</div>
                    <div className="imdb">
                      <div className="imdb-label">IMDb RATING</div>
                      <div className="imdb-rate">{item.imdb}</div>
                    </div>
                  </div>
                  <BsIcons.BsBookmarkPlus
                    className="add-watchList"
                    onClick={addWatchList}
                  />
                  <div className="inner-profile1">
                    <img
                      className="profile-img"
                      src={item.url}
                      height="400"
                      width="270"
                    ></img>
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
                    <div className="rate">
                      {db.db.currentUser.movies[index0].rate.length === 0 ? (
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          color2={"#ffd700"}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="show-rate">{thatMovie.rateResult}</div>
                    <div className="show-rate-number">
                      {thatMovie.rate.length}
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
                      {thatMovie.comments.map((el, i) => {
                        element00 = el;
                        return (
                          <>
                            <div
                              className={
                                el.spoil === true ? "spoil-comment" : "cmt-user"
                              }
                            >
                              <div
                                className={
                                  el.admin === true
                                    ? "cmt-username-admin"
                                    : "cmt-username"
                                }
                              >
                                {el.userName}
                              </div>
                              {db.db.currentUser.admin === true ? (
                                <div
                                  className="remove-comment"
                                  onClick={() => removeCmt(i, index0)}
                                >
                                  Delete
                                </div>
                              ) : (
                                ""
                              )}
                              {el.messages}
                              <div
                                className="cmt-reply"
                                onClick={() => cmtReply(el)}
                              >
                                Reply
                              </div>
                              {el.col === true ? (
                                <Reply
                                  thisMovie={thatMovie}
                                  open4={isOpen4}
                                  onClose4={setIsOpen4}
                                  index={i}
                                ></Reply>
                              ) : (
                                ""
                              )}

                              <div>
                                {el.reply.map((el2) => {
                                  return (
                                    <>
                                      <div className="comment-reply">
                                        <div
                                          className={
                                            el2.admin === true
                                              ? "cmt-username-admin"
                                              : "cmt-username-reply"
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
                              open={isOpen}
                              onClose={() => setIsOpen(false)}
                            /> */}
                          </>
                        );
                      })}
                    </div>
                  </div>
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
