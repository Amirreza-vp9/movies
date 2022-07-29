import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";
import { useNavigate, useParams } from "react-router-dom";

const WatchList2 = () => {
  const { db, setDb } = useContext(DataContext);
  const navigate = useNavigate();
  const params = useParams();

  function removeWatchList(i) {
    let answer = window.confirm(
      "Are you sure to remove this movie from your watchList ?"
    );
    if (answer) {
      const clone = { ...db };
      clone.db.currentWatchList.movie.splice(i, 1);
      setDb(clone);
    }
  }

  return (
    <>
      {db.db.currentUser && (
        <>
          <div className="category">
            {db.db.currentWatchList.movie.map((item, i) => {
              return (
                <>
                  <div className="category-div">
                    <div className="category-name">{item.name}</div>
                    {params.id.includes(db.db.currentUser.UserName) ? (
                      <div
                        className="remove-watchList"
                        onClick={() => removeWatchList(i)}
                      >
                        -
                      </div>
                    ) : (
                      ""
                    )}
                    <img
                      className="category-img"
                      src={item.url}
                      height="350"
                      width="250"
                    />
                    <div className="category-sl">
                      {item.storyLine}
                      <br />
                      <button
                        className="category-btn"
                        onClick={() => navigate(`/profile/${item.id}`)}
                      >
                        more info
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default WatchList2;
