import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className='relative bg-white rounded-lg p-2.5 m-4 w-60 float-left' >
      <h1 className='font-semibold text-lg mb-1.5'>{props.title}</h1>
      <p className = 'text-lg mb-2.5'>{props.content}</p>
      <button className='absolute right right-4 bottom-4'
      onClick={handleClick}>
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default Note;
