import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import NoteForm from "../components/Notes/NoteForm";
import SearchBar from "../components/Notes/SearchBar";
import CategoryFilter from "../components/Notes/CategoryFilter";
import NoteCard from "../components/Notes/NoteCard";

function Notes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("React");

  const [notes, setNotes] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  // Load Notes
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save Notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote() {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    const newNote = {
      title,
      description,
      category,
      pinned: false,
      createdAt: new Date().toLocaleDateString(),
    };

    if (editIndex !== null) {
      const updatedNotes = [...notes];

      updatedNotes[editIndex] = {
        ...newNote,
        pinned: notes[editIndex].pinned,
      };

      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([newNote, ...notes]);
    }

    setTitle("");
    setDescription("");
    setCategory("React");
  }

  function deleteNote(index) {
    const updatedNotes = notes.filter((_, i) => i !== index);

    setNotes(updatedNotes);

    if (editIndex === index) {
      setTitle("");
      setDescription("");
      setCategory("React");
      setEditIndex(null);
    }
  }

  function editNote(index) {
    setTitle(notes[index].title);
    setDescription(notes[index].description);
    setCategory(notes[index].category);

    setEditIndex(index);
  }

  function togglePin(index) {
    const updatedNotes = [...notes];

    updatedNotes[index].pinned = !updatedNotes[index].pinned;

    setNotes(updatedNotes);
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Notes</h1>

        <p className="dashboard-subtitle">
          Save your interview preparation notes.
        </p>

        <NoteForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          category={category}
          setCategory={setCategory}
          addNote={addNote}
          editIndex={editIndex}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          filter={filter}
          setFilter={setFilter}
        />

        <NoteCard
          notes={notes}
          search={search}
          filter={filter}
          editNote={editNote}
          deleteNote={deleteNote}
          togglePin={togglePin}
        />
      </div>
    </>
  );
}

export default Notes;