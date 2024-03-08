import React from 'react';

const CreateNote = ({ inputTitle, inputText, setInputTitle, setInputText, saveHandler }) => {
  const char = 100;
  const charLimit = char - inputText.length;
  return (
    <div className='note'>
      <input
        type="text"
        placeholder='Title'
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <textarea
        cols={10}
        rows={5}
        placeholder='Memorize it ...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={100}
      ></textarea>
      <div className='note_footer'>
        <span className='label'>{charLimit} words left</span>
        <button className='note_save' onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
}

export default CreateNote;
