import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setisExpanded] = useState(false);

  function expand() {
    setisExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className='relative w-[480px] mt-[30px] mb-[20px] mx-auto bg-[#a39d9d82] 
      p-4 rounded-lg shadow-[0_1px_5px rgba(138,137,137,0.232)]'>
        {isExpanded && (
          <input className = 'w-full border-none p-1 outline-none text-xl font-inherit resize-none'
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea className= 'w-full border-none p-1 outline-none text-xl font-inherit resize-none'
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="What's on your mind..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} 
          sx={{
            position: 'absolute',
            right: '18px',
            bottom: '-18px',
            backgroundColor: '#808080', 
            color: 'black', 
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            boxShadow: '0 1px 3px #778096',
            cursor: 'pointer',
            outline: 'none',
            '&:hover': {
                backgroundColor: 'gray-500', 
            }
          }}>
          
            <AddIcon />{" "}
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
