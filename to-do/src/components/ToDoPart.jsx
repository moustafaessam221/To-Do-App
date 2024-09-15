import React, { useContext } from "react";
import "./ToDoPart.css";
import { NotesContext } from "../store/NotesContext";

function ToDoPart( { title, day, difficulty, job, id } ) {

  const {removeNote} = useContext(NotesContext);
  return (
    <div className="ToDoPart">
      <button onClick={() => removeNote(id)} className="remove">X</button>
      <h2>{title}</h2>
      <div className="day-diff-job">
        <div className="dayAndDifficulty">
          <div className="day">{day}</div>
          <div className="diff">{difficulty}</div>
        </div>
        <div className="job">{job}</div>
      </div>
    </div>
  );
}

export default ToDoPart;
