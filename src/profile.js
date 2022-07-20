import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Rate from "./rate";
import Comment from "./comment";
import { DataContext } from "./DataProvider";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [message, setMessage] = useState("");
  const [spoiling, setSpoiling] = useState(false);
  const { db, setDb } = useContext(DataContext);
  const params = useParams();
  const id = db.db.movies.find((info) => info.id == params.id);

  function onClose2() {
    setIsOpen2(false);
  }

  function send() {
    setMessage(commentValue);
    setCommentValue("");
    setIsOpen2(false);
  }

  function spoil() {
    setSpoiling(true);
  }

  function addIcon() {
    setSpoiling(false);
    setIsOpen2(true);
  }

  const handleMessageChange = (event) => {
    setCommentValue(event.target.value);
  };

  return (
    <div className="profile">
      {db.db.movies.map((item) => {
        if (item.id === id.id) {
          return (
            <>
              <div className="title-name">{item.name}</div>
              <i className="fa fa-check"></i>
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
            </>
          );
        }
      })}
      <div className="title-under">
        <div className="title-style"></div>
        <div className="title-text">Comment</div>
        <div className="add" onClick={addIcon}>
          +
        </div>
      </div>
      <Comment open2={isOpen2}>
        <div className="u-c-modal-cmt">
          <div className="modal-un">User name</div>
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
        <div onClick={spoil} className="spoil">
          spoil
        </div>
        <button className="send-cmt" onClick={send}>
          send
        </button>
      </Comment>
      <div className="comments">
        {send ? (
          <div className={spoiling === true ? "spoil-comment" : "comment"}>
            {message}
          </div>
        ) : (
          ""
        )}
      </div>
      <Rate open={isOpen} onClose={() => setIsOpen(false)}></Rate>
    </div>
  );
};

export default Profile;
