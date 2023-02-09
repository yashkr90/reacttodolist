import React from "react";
import "./List.css";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import IconButton from "@mui/material/IconButton";

const List = (props) => {
  // const deleteItems=(id)=>{
  //     console.log("deleted");
  // }

  return (
    <>
      <div className="itemdiv">
        <IconButton
          onClick={() => {
            props.deleteitem(props.id);
          }}
        >
          <DeleteForeverRoundedIcon className="delicon" />
        </IconButton>

        <li>{props.text}</li>
      </div>
    </>
  );
};

export default List;
