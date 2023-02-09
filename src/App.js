import "./App.css";
import React, { useState } from "react";
import List from "./List";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";

function App() {
  const [item, setItem] = useState("");

  const [listItem, setListItem] = useState([]);

  const HandleChange = (event) => {
    //onchange event calls handle chage which
    //update the item in input to new 'item' typed in input fiels
    console.log(event.target.value);
    setItem(event.target.value);
  };

  const AddItem = (event) => {
    //when button is clicked it calls the add item function
    //which update the array (which stores the list items)with the new 'item'
    event.preventDefault();
    setListItem((previtem) => {
      return [...previtem, item];
    });

    setItem(""); // setItem to empty to empty the input field..updates 'item' to blank and that item is displayed in
    //value attribute of input
  };

  const deleteItems = (id) => {
    console.log("deleted");
    console.log(id);

    setListItem(
      listItem.filter((arrayEle, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <div className="maindiv">
        <div className="centerdiv">
          <div className="header">
            <h1>TO DO LIST</h1>
            <br />
          </div>
          <div className="inputdiv">
            <form>
              <TextField
                className="inputfield"
                id="standard-basic"
                label="Add item"
                value={item}
                onChange={HandleChange}
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
              <IconButton type="submit" onClick={AddItem}>
                <AddCircleIcon fontSize="large" className="Addicon" />
              </IconButton>
            </form>
          </div>
          <div className="listdiv">
            <ul>
              {listItem.map((val, index) => {
                //the listitem array is displayed here
                //which is map to display the array here
                return (
                  <List
                    text={val}
                    key={index}
                    id={index}
                    deleteitem={deleteItems}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
