import React, { useContext, useState } from "react";
import { NotesContext } from "../store/NotesContext";
import "./AddNotes.css";
import toast from "react-hot-toast";

function AddNotes() {
  const { addNote, showForm, setShowForm } = useContext(NotesContext);


  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [job, setJob] = useState("");

  function handleSubmit(e) {
    if (title && day && difficulty && job) {
      e.preventDefault();
      addNote({ title, day, difficulty, job });
      setTitle("");
      setDay("");
      setDifficulty("");
      setJob("");
      toast.success("Note added successfully");
    } else {
      alert("Please fill in all fields");
    }
  }

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <button className="add-button" onClick={() => toggleForm()}>
        Add
      </button>
      {showForm && (
        <div className="add-notes">
          <button className="close-button" onClick={() => setShowForm(false)}>X</button>
          <h2>Add Notes</h2>
          <form>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <select onChange={(e) => setDay(e.target.value)}>
              <option value="">Select Day</option>
              <option value="Sat">Sat</option>
              <option value="Sun">Sun</option>
              <option value="Mon">Mon</option>
              <option value="Tue">Tue</option>
              <option value="Wed">Wed</option>
              <option value="Thu">Thu</option>
              <option value="Fri">Fri</option>
            </select>
            <select onChange={(e) => setDifficulty(e.target.value)}>
              <option value="">Select Difficulty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input
              type="text"
              placeholder="Job"
              onChange={(e) => setJob(e.target.value)}
            />
            <button type="submit" className="btn" onClick={handleSubmit}>
              Add
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default AddNotes;
