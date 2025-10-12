import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = ()=>{
    
  }


  const handleDelete = ()=>{

  }


  const handleAdd = ()=>{
    setTodos([...todos,{todo,iscompleted:false}])
    setTodo("")
    console.log(todos)
  }

  const handleChange = (e)=>{
    
    setTodo(e.target.value)
  }

  return (
    <>
      <Navbar/>
      <div className="container mx-auto bg-violet-100 rounded-xl p-3 min-h-[80vh]"> 
        <div className="addtodo my-5">
          <h2 className='text-lg font-bold'>Add a ToDo</h2>
          <input onChange={handleChange} value={todo} className='bg-white w-1/2' type="text" placeholder='Add Your Tasks here' />
          <button onClick={handleAdd} className=' text-sm font-bold bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1 m-4'>Add</button>
          </div> 
          <h2 className='text-lg font-bold'>Your TO DO</h2>
          <div className="todos">
            {todos.map(item=> {

            
           return <div key={todo} className="todo w-1/4 flex justify-between my-3">
            <input type="checkbox" value={todo.iscompleted} name="" id="" />
              <div className={item.iscompleted?"line-through" : ""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className=' text-sm font-bold bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1 m-1'>Edit</button>
                <button onClick={handleDelete} className=' text-sm font-bold bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1 m-1'>Delete</button>

              </div>

            </div>
              })}
          </div>
        
      </div>
    </>
  )
}

export default App
