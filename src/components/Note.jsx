import React from "react";

function Note() {
    return (
        <div className="bg-white rounded-lg w-60 shadow-md p-2.5 m-4 float-left">
            <h1 className="text-lg mb-1.5 font-semibold text-[1.1em]">This is the note title</h1>
            <p className="txt-lg mb-2.5 whitespace-pre-wrap break-words text-[1.1em]">This is the note content</p>
        </div>
    );
}

export default Note;