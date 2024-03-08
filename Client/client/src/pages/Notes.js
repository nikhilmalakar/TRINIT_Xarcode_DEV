import React, { useEffect, useState } from 'react';
import CreateNote from '../components/notes/CreateNote';
import '../components/notes/notes.css';
import { v4 as uuid } from 'uuid';
import Note from '../components/notes/Note';

const Notes = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [editToggle, setEditToggle] = useState(null);

  const editHandler = (id, title, text) => {
    setEditToggle(id);
    setInputTitle(title);
    setInputText(text);
  }

  const saveHandler = () => {
    if (editToggle) {
      setNotes(notes.map((note) => (
        note.id === editToggle ?
          { ...note, title: inputTitle, text: inputText }
          : note
      )))
    } else {
      setNotes((prevNotes) => [
        ...prevNotes, {
          id: uuid(),
          title: inputTitle,
          text: inputText
        }
      ])
    }

    setInputTitle("");
    setInputText("");
    setEditToggle(null);
  }

  const deleteHandler = (id) => {
    const newNotes = notes.filter(n => n.id !== id)
    setNotes(newNotes)
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='notes'>
      {notes.map((note) => (
        editToggle === note.id ?
          <CreateNote
            key={note.id}
            inputTitle={inputTitle}
            inputText={inputText}
            setInputTitle={setInputTitle}
            setInputText={setInputText}
            saveHandler={saveHandler}
          />
          :
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
      ))}
      {
        editToggle === null ?
          <CreateNote
            inputTitle={inputTitle}
            inputText={inputText}
            setInputTitle={setInputTitle}
            setInputText={setInputText}
            saveHandler={saveHandler}
          />
          : <></>
      }
    </div>
  );
}

export default Notes;
