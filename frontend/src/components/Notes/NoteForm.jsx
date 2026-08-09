function NoteForm({
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  addNote,
  editIndex,
}) {
  return (
    <div className="section-card">
      <h2>{editIndex !== null ? "Update Note" : "Add Note"}</h2>

      <input
        type="text"
        className="company-input"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="company-input"
        placeholder="Write your note..."
        rows="5"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="company-input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="React">React</option>
        <option value="Python">Python</option>
        <option value="DBMS">DBMS</option>
        <option value="Aptitude">Aptitude</option>
        <option value="Interview">Interview</option>
        <option value="Other">Other</option>
      </select>

      <button
        className="action-btn"
        onClick={addNote}
      >
        {editIndex !== null ? "Update Note" : "Add Note"}
      </button>
    </div>
  );
}

export default NoteForm;