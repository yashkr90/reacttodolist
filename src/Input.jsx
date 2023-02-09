import React from "react";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const Input = (props) => {
  return (
    <>
      <div className="inputdiv">
        <form>
          <TextField
            className="inputfield"
            id="standard-basic"
            label="Add item"
            value={props.item}
            onChange={props.HandleChange}
            variant="standard"
            color="success"
            // inputProps={{style: {fontWeight:500}}}
          />
          {/* <input
                type="text"
                placeholder="Add item"
                name="item"
                value={item}
                onChange={HandleChange}
              ></input> */}
          {/* <AddCircleIcon fontSize="large" type="submit" onClick={AddItem} className="Addicon"/> */}
          <IconButton type="submit" onClick={props.AddItem}>
            <AddCircleIcon fontSize="large" className="Addicon" />
          </IconButton>
        </form>
      </div>
    </>
  );
};

export default Input;
