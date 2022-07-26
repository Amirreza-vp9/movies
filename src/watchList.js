import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const { db, setDb } = useContext(DataContext);
  const { darkTheme, setDarkTheme } = useContext(DataContext);
  const navigate = useNavigate();

  const themeStyle = {
    padding: "1px",
    backgroundColor: darkTheme ? "#0e0e0e" : "rgb(94, 97, 100)",
  };

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
            {db.db.currentUser.WatchList.map((item, i) => {
              return (
                <>
                  <div className="category-div">
                    <div className="category-name">{item.name}</div>
                    <div
                      className="remove-watchList"
                      onClick={() => removeWatchList(i)}
                    >
                      -
                    </div>
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

export default WatchList;
