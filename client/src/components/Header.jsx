import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import BrainIcon from "./BrainIcon";
function Header() {
  return (
    <>
      <header className='bg-[#7d899b] px-8 py-4 shadow-md'>
        <h1 className= 'text-[#fff] font-serif font-extralightd text-2xl '>
         <BrainIcon fontSize = "large"/>
        {""} Brain Extension
        </h1>
      </header> 
    </>
  );
}

export default Header;
