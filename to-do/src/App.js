import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { NotesContext } from "./store/NotesContext";
import NotesList from "./components/NotesList";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  // add notes
  function addNote(newNote) {
    axios.post("http://localhost:8000/notes", newNote).then((response) => {
      setNotes([...notes, response.data]);
      toast.success("Note added successfully!");
    });
  }

  // remove
  function removeNote(id) {
    console.log("Removing note with id:", id); // Debugging line
    axios.delete(`http://localhost:8000/notes/${id}`).then((response) => {
      setNotes(notes.filter((note) => note.id !== id));
      toast.error("Note removed successfully!");
    });
  }

  // toggle completed
  function toggleCompleted(id) {
    const noteFound = notes.find((note) => note.id === id);
    const updatedNote = { ...noteFound, completed: !noteFound.completed };
    axios
      .put(`http://localhost:8000/notes/${id}`, updatedNote)
      .then((response) => {
        setNotes(notes.map((note) => (note.id === id ? response.data : note)));
        toast.success("Note updated successfully!");
      });
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        removeNote,
        toggleCompleted,
        showForm,
        setShowForm,
      }}
    >
      <div className="App">
        <p className="project-title">My awesome to-do list</p>
        <NotesList />
        <Toaster />
      </div>
    </NotesContext.Provider>
  );
}

export default App;
