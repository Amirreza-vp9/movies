import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

const SetMovie = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const [inputValue6, setInputValue6] = useState("");
  const [inputValue7, setInputValue7] = useState("");
  const [inputValue8, setInputValue8] = useState("");
  const [inputValue9, setInputValue9] = useState("");
  const [inputValue10, setInputValue10] = useState("");
  const [inputValue11, setInputValue11] = useState("");
  const [inputValue12, setInputValue12] = useState("");
  const [inputValue14, setInputValue14] = useState("");
  const [inputValue15, setInputValue15] = useState("");
  const [inputValue16, setInputValue16] = useState("");
  const [inputValue17, setInputValue17] = useState("");
  const [inputValue18, setInputValue18] = useState("");
  const [inputValue19, setInputValue19] = useState("");
  const [inputValue20, setInputValue20] = useState("");
  const [inputValue21, setInputValue21] = useState("");
  const [inputValue22, setInputValue22] = useState("");
  const [inputValue23, setInputValue23] = useState("");
  const [inputValue24, setInputValue24] = useState("");
  const [inputValue25, setInputValue25] = useState("");
  const [inputValue26, setInputValue26] = useState("");
  const [inputValue27, setInputValue27] = useState("");
  const [inputValue28, setInputValue28] = useState("");
  const { db, setDb } = useContext(DataContext);
  const { darkTheme, setDarkTheme } = useContext(DataContext);
  const UID = () =>
    `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`;

  function addItem() {
    if (
      inputValue === "" &&
      inputValue3 === "" &&
      inputValue2 === "" &&
      inputValue14 === "" &&
      inputValue26 === ""
    ) {
      alert("Please fill the inputs which have red label");
    } else {
      let answer = window.confirm("Are you sure ?");
      if (answer) {
        const clone = { ...db };
        clone.db.movies.push({
          id: parseInt(UID()),
          name: inputValue,
          url: inputValue3,
          trailer: inputValue12,
          type: inputValue2,
          age: inputValue4,
          imdb: inputValue5,
          topCast: {
            cast: [
              {
                name: inputValue6,
                role: inputValue23,
                url: inputValue9,
              },
              {
                name: inputValue7,
                role: inputValue24,
                url: inputValue10,
              },
              {
                name: inputValue8,
                role: inputValue25,
                url: inputValue11,
              },
            ],
          },
          rate: "",
          genres: [
            [parseInt(inputValue14), inputValue26],
            [parseInt(inputValue15), inputValue27],
            [parseInt(inputValue16), inputValue28],
          ],
          comments: [],
          year: inputValue17,
          time: inputValue18,
          directors: inputValue19,
          boxOffice: inputValue20,
          distributedBy: inputValue21,
          storyLine: inputValue22,
        });
        setDb(clone);

        const clone2 = { ...db };
        clone2.db.genres.filter((item) => {
          if (item.id == inputValue14) {
            item.movies.push({
              id: clone.db.movies[clone.db.movies.length - 1].id,
              name: inputValue,
              url: inputValue3,
              trailer: inputValue12,
              type: inputValue2,
              age: inputValue4,
              imdb: inputValue5,
              topCast: {
                cast: [
                  {
                    name: inputValue6,
                    role: inputValue23,
                    url: inputValue9,
                  },
                  {
                    name: inputValue7,
                    role: inputValue24,
                    url: inputValue10,
                  },
                  {
                    name: inputValue8,
                    role: inputValue25,
                    url: inputValue11,
                  },
                ],
              },
              rate: "",
              genres: [
                [parseInt(inputValue14)],
                [parseInt(inputValue15)],
                [parseInt(inputValue16)],
              ],
              comments: [],
              year: inputValue17,
              time: inputValue18,
              directors: inputValue19,
              boxOffice: inputValue20,
              distributedBy: inputValue21,
              storyLine: inputValue22,
            });
          }
        });
        setDb(clone2);

        const clone3 = { ...db };
        clone3.db.genres.filter((item) => {
          if (item.id === inputValue15) {
            item.movies.push({
              id: clone.db.movies[clone.db.movies.length - 1].id,
              name: inputValue,
              url: inputValue3,
              trailer: inputValue12,
              type: inputValue2,
              age: inputValue4,
              imdb: inputValue5,
              topCast: {
                cast: [
                  {
                    name: inputValue6,
                    role: inputValue23,
                    url: inputValue9,
                  },
                  {
                    name: inputValue7,
                    role: inputValue24,
                    url: inputValue10,
                  },
                  {
                    name: inputValue8,
                    role: inputValue25,
                    url: inputValue11,
                  },
                ],
              },
              rate: "",
              genres: [
                [parseInt(inputValue14)],
                [parseInt(inputValue15)],
                [parseInt(inputValue16)],
              ],
              comments: [],
              year: inputValue17,
              time: inputValue18,
              directors: inputValue19,
              boxOffice: inputValue20,
              distributedBy: inputValue21,
              storyLine: inputValue22,
            });
          }
        });
        setDb(clone3);

        const clone4 = { ...db };
        clone4.db.genres.filter((item) => {
          if (item.id === inputValue16) {
            item.movies.push({
              id: clone.db.movies[clone.db.movies.length - 1].id,
              name: inputValue,
              url: inputValue3,
              trailer: inputValue12,
              type: inputValue2,
              age: inputValue4,
              imdb: inputValue5,
              topCast: {
                cast: [
                  {
                    name: inputValue6,
                    role: inputValue23,
                    url: inputValue9,
                  },
                  {
                    name: inputValue7,
                    role: inputValue24,
                    url: inputValue10,
                  },
                  {
                    name: inputValue8,
                    role: inputValue25,
                    url: inputValue11,
                  },
                ],
              },
              rate: "",
              genres: [
                [parseInt(inputValue14)],
                [parseInt(inputValue15)],
                [parseInt(inputValue16)],
              ],
              comments: [],
              year: inputValue17,
              time: inputValue18,
              directors: inputValue19,
              boxOffice: inputValue20,
              distributedBy: inputValue21,
              storyLine: inputValue22,
            });
          }
        });
        setDb(clone4);
      }
    }
  }

  const themeStyle = {
    paddingBottom: "1900px",
    backgroundColor: darkTheme ? "#0e0e0e" : "rgb(94, 97, 100)",
  };

  return (
    <>
      <div style={themeStyle}>
        <div className="watchList-box">
          <h2>Movie / TV Series</h2>
          <form>
            <div className="user-box">
              <div className="inner-user-box">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <label className="marks">Name</label>
              </div>
              <div className="user-box">
                <input
                  value={inputValue2}
                  onChange={(e) => setInputValue2(e.target.value)}
                />
                <label className="marks">Type</label>
              </div>
            </div>
            <div className="user-box">
              <input
                value={inputValue3}
                onChange={(e) => setInputValue3(e.target.value)}
              />
              <label className="marks">Url</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue4}
                onChange={(e) => setInputValue4(e.target.value)}
              />
              <label>Age</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue5}
                onChange={(e) => setInputValue5(e.target.value)}
              />
              <label>IMDb</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue6}
                onChange={(e) => setInputValue6(e.target.value)}
              />
              <label>Top Cast 1</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue7}
                onChange={(e) => setInputValue7(e.target.value)}
              />
              <label>Top Cast 2</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue8}
                onChange={(e) => setInputValue8(e.target.value)}
              />
              <label>Top Cast 3</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue9}
                onChange={(e) => setInputValue9(e.target.value)}
              />
              <label>Top Cast-Role 1</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue23}
                onChange={(e) => setInputValue23(e.target.value)}
              />
              <label>Top Cast-Role 2</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue24}
                onChange={(e) => setInputValue24(e.target.value)}
              />
              <label>Top Cast-Role 3</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue25}
                onChange={(e) => setInputValue25(e.target.value)}
              />
              <label>Top Cast-Image 1</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue10}
                onChange={(e) => setInputValue10(e.target.value)}
              />
              <label>Top Cast-Image 2</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue11}
                onChange={(e) => setInputValue11(e.target.value)}
              />
              <label>Top Cast-Image 3</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue12}
                onChange={(e) => setInputValue12(e.target.value)}
              />
              <label>Trailer</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue26}
                onChange={(e) => setInputValue26(e.target.value)}
              />
              <label className="marks">Genre 1</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue27}
                onChange={(e) => setInputValue27(e.target.value)}
              />
              <label>Genre 2</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue28}
                onChange={(e) => setInputValue28(e.target.value)}
              />
              <label>Genre 3</label>
            </div>
            <div className="user-box">
              <input
                type="number"
                value={inputValue14}
                onChange={(e) => setInputValue14(e.target.value)}
              />
              <label className="marks">Genre / id 1</label>
            </div>
            <div className="user-box">
              <input
                type="number"
                value={inputValue15}
                onChange={(e) => setInputValue15(e.target.value)}
              />
              <label>Genre / id 2</label>
            </div>
            <div className="user-box">
              <input
                type="number"
                value={inputValue16}
                onChange={(e) => setInputValue16(e.target.value)}
              />
              <label>Genre / id 3</label>
            </div>
            <div className="user-box">
              <input
                type="number"
                value={inputValue17}
                onChange={(e) => setInputValue17(e.target.value)}
              />
              <label>Year</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue18}
                onChange={(e) => setInputValue18(e.target.value)}
              />
              <label>Time</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue19}
                onChange={(e) => setInputValue19(e.target.value)}
              />
              <label>Directors</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue20}
                onChange={(e) => setInputValue20(e.target.value)}
              />
              <label>Box office</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue21}
                onChange={(e) => setInputValue21(e.target.value)}
              />
              <label>distributedBy</label>
            </div>
            <div className="user-box">
              <input
                value={inputValue22}
                onChange={(e) => setInputValue22(e.target.value)}
              />
              <label>Story line</label>
            </div>
            <div className="a-submit" onClick={addItem}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SetMovie;
