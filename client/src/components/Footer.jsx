import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className= 'absolute flex items-center justify-center bottom-0 w-full h-10 bg-gray-800'>
      <p className = 'text-[#ccc]'> Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
