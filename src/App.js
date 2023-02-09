import "./App.css";
import React, { useState } from "react";
import List from "./List";

import Input from "./Input";

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
          <Input item={item} HandleChange={HandleChange} AddItem={AddItem} />
          
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
