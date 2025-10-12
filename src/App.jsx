import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container mx-auto bg-violet-100 rounded-xl p-3 min-h-[80vh]"> 
        <div className="addtodo my-5">
          <h2 className='text-lg font-bold'>Add a ToDo</h2>
          <input className='bg-white w-1/2' type="text" placeholder='Add Your Tasks here' />
          <button className=' text-sm font-bold bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1 m-4'>Add</button>
          </div> 
          <h2 className='text-lg font-bold'>Your TO DO</h2>
          <div className="todos">
            <div className="todo flex justify-between">
              <div className="text">
              Lorem ipsum dolor, sit amet  assumenda fugit dolores!
              </div>
              <div className="buttons">
                <button onClick={handleEdit} className=' text-sm font-bold bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1 m-1'>Edit</button>
                <button onClick={handleDelete} className=' text-sm font-bold bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1 m-1'>Delete</button>

              </div>

            </div>
          </div>
        
      </div>
    </>
  )
}

export default App
