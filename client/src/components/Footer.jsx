import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className= ' flex absolute bottom-0 w-full items-center justify-center'>
      <p className = 'text-[#ccc]'> Copyright ⓒ {year} Sahzad Hussain</p>
    </footer>
  );
}

export default Footer;
