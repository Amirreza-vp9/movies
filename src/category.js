import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";

export default function Category({ open, onClose }) {
  const { db, setDb } = useContext(DataContext);
  if (!open) return null;

  return (
    <>
      <div className="backdropC" onClick={onClose}></div>
      <div className="modalC">
        <div className="C-title-link">Movies :</div>
        <br />
        <div className="C-link" onClick={onClose}>
          Top Rated
        </div>
        <br />
        <Link className="C-link" to={`/list/:${1}`} onClick={onClose}>
          Sci-fi
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${2}`} onClick={onClose}>
          Action
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${3}`} onClick={onClose}>
          Drama
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${4}`} onClick={onClose}>
          Thriller
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${5}`} onClick={onClose}>
          Biography
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${6}`} onClick={onClose}>
          War
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${7}`} onClick={onClose}>
          Western
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${8}`} onClick={onClose}>
          Anime
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${9}`} onClick={onClose}>
          Animation
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${10}`} onClick={onClose}>
          Sport
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${11}`} onClick={onClose}>
          Adventure
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${12}`} onClick={onClose}>
          Comedy
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${13}`} onClick={onClose}>
          Fantasy
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${14}`} onClick={onClose}>
          History
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${15}`} onClick={onClose}>
          Crime
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${16}`} onClick={onClose}>
          Musical
        </Link>
      </div>
    </>
  );
}
