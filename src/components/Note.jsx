import React from "react";

function Note(props) {
    
    function handleClick() {
        props.onDelete(props.id);
    }

  return (
    <div className="bg-white rounded-lg w-60 shadow-md p-2.5 m-4 ml-8">
      <h1 className="text-lg mb-1.5 font-semibold text-[1.1em]">
        {props.title}
      </h1>
      <p className="text-lg mb-2.5 whitespace-pre-wrap break-words text-[1.1em]">
        {props.content}
      </p>
      <button
        className="relative float-right text-[#f5ba13] mr-2.5"
        onClick={handleClick}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
