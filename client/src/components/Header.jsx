import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <>
      <header className='bg-gray-500  px-8 py-4 shadow-md'>
        <h1 className= 'text-[#fff] font-serif font-extralightd text-2xl '>
          <HighlightIcon />
          Brain Extension
        </h1>
      </header> 
    </>
  );
}

export default Header;
