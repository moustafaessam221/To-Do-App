import React, { useContext } from "react";
import "./ToDoPart.css";
import { NotesContext } from "../store/NotesContext";

function ToDoPart({ title, day, difficulty, job, id, completed }) {
  function checkDifficulty() {
    if (difficulty === "1") {
      return (
        <div className="easy diff">
          <div></div>
        </div>
      );
    } else if (difficulty === "2") {
      return (
        <div className="med diff">
          <div></div>
          <div></div>
        </div>
      );
    } else if (difficulty === "3") {
      return (
        <div className="hard diff">
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }
  }

  const { removeNote, toggleCompleted } = useContext(NotesContext);
  return (
    <div className="ToDoPart">
      <button onClick={() => removeNote(id)} className="remove">
        X
      </button>
      <h2 className={completed ? "title completed" : "title"} onClick={() => toggleCompleted(id)}>
        {title}
      </h2>
      <div className="day-diff-job">
        <div className="dayAndDifficulty">
          <div className="day">{day}</div>
          {checkDifficulty()}
        </div>
        <div className="job">{job}</div>
      </div>
    </div>
  );
}

export default ToDoPart;
