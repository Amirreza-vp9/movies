import React from "react";
import { Link } from "react-router-dom";

export default function Category2({ open2, onClose2 }) {
  if (!open2) return null;
  return (
    <>
      <div className="backdropC" onClick={onClose2}></div>
      <div className="modalC">
        <div className="C-title-link">TV Shows :</div>
        <br />
        <div className="C-link" onClick={onClose2}>
          Top Rated
        </div>
        <br />
        <Link className="C-link" to={`/list/:${1}`} onClick={onClose2}>
          Sci-fi
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${2}`} onClick={onClose2}>
          Action
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${3}`} onClick={onClose2}>
          Drama
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${4}`} onClick={onClose2}>
          Thriller
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${5}`} onClick={onClose2}>
          Biography
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${6}`} onClick={onClose2}>
          War
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${7}`} onClick={onClose2}>
          Western
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${8}`} onClick={onClose2}>
          Anime
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${9}`} onClick={onClose2}>
          Animation
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${10}`} onClick={onClose2}>
          Sport
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${11}`} onClick={onClose2}>
          Adventure
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${12}`} onClick={onClose2}>
          Comedy
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${13}`} onClick={onClose2}>
          Fantasy
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${14}`} onClick={onClose2}>
          History
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${15}`} onClick={onClose2}>
          Crime
        </Link>
        <br />
        <br />
        <Link className="C-link" to={`/list/:${16}`} onClick={onClose2}>
          Musical
        </Link>
      </div>
    </>
  );
}
