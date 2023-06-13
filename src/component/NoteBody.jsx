import React from 'react'

export default function NoteBody(props) {
  return (
      <div className='note-body'>
          <div className='note-item'>
              <div className='note-item-all'>
                  <label htmlFor="">Title</label><br />
                  <input placeholder='Take a note' value={props.inputValue} onChange={props.handleInputChange} />
              </div>
              <div className='note-item-lla'>
                  <button onClick={props.handleButton}>+</button>
              </div>
          </div>
      </div>         
  )
}
