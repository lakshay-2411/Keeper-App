import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form className="relative bg-white rounded-lg w-[480px] shadow-3xl p-4 mt-7 mb-2 mx-auto">
        <input
          className="w-full text-lg outline-none border-none"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          className="w-full text-lg outline-none resize-none p-1 border-none"
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button
          className="absolute bg-[#f5ba13] text-white text-sm w-9 h-9 right-4 bottom-[-18px] rounded-full outline-none border-none shadow-4xl"
          onClick={submitNote}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
