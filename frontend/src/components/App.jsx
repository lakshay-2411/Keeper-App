import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App() {
  const [notes, setNotes] = useState([]);

  // Function to show all notes
  async function fetchNotes(){
    try {
      const response = await fetch("http://localhost:8008/notes");
      const data = await response.json();
      setNotes(data);
    } catch (err) {
      console.log("Error fetching notes: ", err);
    }
  }

  // Fetch notes when component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  async function addNote(newNote) {
    const response = await fetch("http://localhost:8008/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    const data = await response.json();
    console.log(data);
    setNotes((prevNotes) => [...prevNotes, data]);
    // setNotes((prevNotes) => {
    //   return [...prevNotes, data];
    // });
    // console.log(note);
    // console.log(notes);
  }

  async function deleteNote(id) {
    console.log("Deleting note with id: ", id);
    
    await fetch(`http://localhost:8008/notes/${id}`, {
      method: "DELETE",
    });
    setNotes((prevNotes) => prevNotes.filter((noteItem) => noteItem._id !== id));
    /*
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    console.log("Delete was triggered");
    */
  }

  return (
    <div className="flex flex-col gap-6">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto w-full items-center self-center origin-center place-items-center">
        {notes.map((noteItem, index) => {
          return (
            <Note
              // key={index}
              // id={index}
              key={noteItem._id}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>

      {/* {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))} */}

      <Footer />
    </div>
  );
}

export default App;
