import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Note from './Note'
import axios from 'axios'
function App() {
  const [content, setContent] = useState("")
  const [notes, setNotes] = useState([])
  
  const saveNote = async() => {
    const content1 = {
      content,
      date: Date.now()
    }
    await axios.post("http://localhost:5000/saveNote",content1)
    setNotes([...notes, content1])
    console.log(notes);
    setContent("")
  }

  const sortNotes = () => {
    setNotes([...notes.sort((a, b) => b.date - a.date)])
  }
 

  return (
    <>
     <div className='absolute right-36 top-4'>
        <button className='border-2 rounded-lg p-2 bg-blue-500 text-white hover:bg-blue-700 transition duration-300'>Register</button>
      </div>
      <div className='absolute right-4 top-4'>
        <button className='border-2 rounded-lg p-2 bg-blue-500 text-white hover:bg-blue-700 transition duration-300' onClick={sortNotes}>Sort Notes !!</button>
      </div>
      <div className='text-3xl font-bold text-center mt-4'>Your Notes :</div>
      <div className='flex gap-2 flex-wrap mb-4 ml-4 '>
        {
          notes.map((note, idx) => <Note key={idx} note={note}></Note>)
        }
      </div>
      <div className='w-screen border-4 p-10 h-screen flex flex-col items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
        <textarea className='border-2 w-full p-2 rounded-lg mb-4 shadow-lg' onChange={(e) => setContent(e.target.value)} placeholder="Write your note here..." value={content} >
        </textarea>
        <button className='border-4 w-48 rounded-full bg-green-500 text-white p-2 hover:bg-green-700 transition duration-300' onClick={saveNote}>Save Note !!</button>
      </div>
    </>
  )
}

export default App
