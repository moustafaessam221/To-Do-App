import React, { useContext } from "react";
import { NotesContext } from "../store/NotesContext";
import ToDoPart from "./ToDoPart";
import AddNotes from "./AddNotes";
import "./NotesList.css";

function NotesList() {
  const { notes, showForm, setShowForm } = useContext(NotesContext);

  function returnNotes(note) {
    return (
      <ToDoPart
        key={note.id}
        id={note.id}
        title={note.title}
        day={note.day}
        difficulty={note.difficulty}
        job={note.job}
        completed={note.completed}
      />
    );
  }

  return (
    <div className="NotesList">
      <AddNotes />
      <div className="todo">
        <h1 className="big-title">To do list</h1>
        {notes.map((note) => (note.completed ? null : returnNotes(note)))}
      </div>
      <div className="Completed">
        <h1 className="big-title">Completed</h1>
        {notes.map((note) => (note.completed ? returnNotes(note) : null))}
      </div>
    </div>
  );
}

export default NotesList;
