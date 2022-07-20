import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";

const List = () => {
  const { db, setDb } = useContext(DataContext);
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="category">
        {db.db.genres.map((item) => {
          return (
            <>
              {item.movies.map((el) => {
                return (
                  <>
                    {":" + item.id === params.id ? (
                      <div className="category-div">
                        <div className="category-name">{el.name}</div>
                        <img
                          className="category-img"
                          src={el.url}
                          height="350"
                          width="250"
                        />
                        <div className="category-sl">
                          {el.storyLine}
                          <br />
                          <button
                            className="category-btn"
                            onClick={() => navigate(`/profile/${el.id}`)}
                          >
                            more info
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
          );
        })}
      </div>
    </>
  );
};

export default List;
