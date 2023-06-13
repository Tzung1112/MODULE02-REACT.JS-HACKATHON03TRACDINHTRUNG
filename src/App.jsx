import logo from './logo.svg';
import './App.css';
import NoteHeader from './component/NoteHeader';
import React, { useState } from 'react';
import NoteBody from './component/NoteBody';
import NoteRender from './component/NoteRender';

function App() {
  const [inputValue, setInputValue] =useState('');
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  const [item, setItemvalue]=useState([])  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButton=()=>{
        setItemvalue([...item,{
          inputValue,
          id: uuidv4()
        }])
    localStorage.setItem("item", JSON.stringify(item))
          console.log(item);
    setInputValue("");
  }
  const deleteButton=(clickid)=>{
    console.log(item);
    for (let i = 0; i < item.length; i++) {
      if (item.id === clickid) {
        item.splice(i,1)
      }
      localStorage.setItem("item", JSON.stringify(item))
    }
    
  }
  return (
    <div className='container'>
      <div className='note-container'>
        <NoteHeader></NoteHeader>
        <NoteBody inputValue={inputValue} handleInputChange={handleInputChange}handleButton={handleButton}></NoteBody>
        <NoteRender inputValue={inputValue} item={item} deleteButton={deleteButton}></NoteRender>   
     </div>
    </div>
  )
}

export default App;
