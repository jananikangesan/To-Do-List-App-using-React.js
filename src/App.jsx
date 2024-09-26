import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <div className='max-w-[85vw] h-screen px-4 py-10 mx-auto flex'>
        <Todo/>
      </div>
    </>
  )
}

export default App
