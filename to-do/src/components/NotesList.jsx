import React, { useContext } from "react";
import { NotesContext } from "../store/NotesContext";
import ToDoPart from "./ToDoPart";
import AddNotes from "./AddNotes";
import "./NotesList.css";


function NotesList() {
  const { notes } = useContext(NotesContext);

  return (
    <div className="NotesList">
      <AddNotes />
      <h1>Notes</h1>
      {notes.map((note) => (
        <ToDoPart
          key={note.id}
          id={note.id}
          title={note.title}
          day={note.day}
          difficulty={note.difficulty}
          job={note.job}
        />
      ))}
    </div>
  );
}

export default NotesList;
