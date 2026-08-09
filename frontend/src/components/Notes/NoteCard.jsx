function NoteCard({
  notes,
  search,
  filter,
  editNote,
  deleteNote,
  togglePin,
}) {
  const filteredNotes = notes
    .filter((note) => {
      const matchesSearch =
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.description.toLowerCase().includes(search.toLowerCase()) ||
        note.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        filter === "All" || note.category === filter;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => b.pinned - a.pinned);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {filteredNotes.length === 0 ? (
        <div className="section-card">
          <h3>No Notes Found</h3>
          <p>Try adding a note or changing your search/filter.</p>
        </div>
      ) : (
        filteredNotes.map((note, index) => (
          <div className="section-card" key={index}>
            <h2>
              {note.pinned ? "📌 " : ""}
              {note.title}
            </h2>

            <p style={{ margin: "15px 0" }}>
              {note.description}
            </p>

            <p>
              <strong>Category:</strong> {note.category}
            </p>

            <p>
              <strong>Created:</strong> {note.createdAt}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                className="edit-btn"
                onClick={() => editNote(index)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this note?"
                    )
                  ) {
                    deleteNote(index);
                  }
                }}
              >
                Delete
              </button>

              <button
                className="action-btn"
                onClick={() => togglePin(index)}
              >
                {note.pinned ? "Unpin" : "Pin"}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default NoteCard;