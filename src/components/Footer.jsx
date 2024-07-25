import React from "react";

const year = new Date().getFullYear();

function footer() {
  return (
    <footer className="absolute text-center bottom-0 w-full h-10">
      <p className="text-gray-300">
        Copyright &copy; {year};
      </p>
    </footer>
  );
}

export default footer;