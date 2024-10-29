import React from "react";

const year = new Date().getFullYear();

function footer() {
  return (
    <footer className="text-center w-full h-10">
      <p className="text-gray-300">
        Copyright &copy; {year};
      </p>
    </footer>
  );
}

export default footer;