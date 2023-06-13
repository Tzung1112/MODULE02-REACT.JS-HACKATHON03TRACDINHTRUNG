import React from 'react'

export default function NoteRender(props) {
    const { item } = props;
  return (
      <div className='note-render'>
          {item.map((item, index) => <div className='note-render-item'>
              <span className='note-render-item-text'>{`${item.inputValue}`}</span> <br />
              <button onClick={() => props.deleteButton(item.id)} className='note-render-item-buttton'><i class="fa-sharp fa-solid fa-trash"></i></button>
          </div>
          )}
      </div>
  )
}
