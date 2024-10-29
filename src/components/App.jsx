import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    // console.log(note);
    // console.log(notes);
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
    console.log("Delete was triggered");
    
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))} */}
      <Footer />
    </div>
  );
}

export default App;
