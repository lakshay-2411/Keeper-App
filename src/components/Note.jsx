import React from "react";

function Note(props) {
    
    function handleClick() {
        props.onDelete(props.id);
    }

  return (
    <div className="relative bg-white rounded-lg w-60 shadow-md p-2.5">
      <h1 className="text-lg mb-1.5 font-semibold text-[1.1em]">
        {props.title}
      </h1>
      <p className="text-lg mb-2.5 whitespace-pre-wrap break-words text-[1.1em]">
        {props.content}
      </p>
      <button
        className="absolute float-right text-[#f5ba13] bottom-0 right-1"
        onClick={handleClick}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
