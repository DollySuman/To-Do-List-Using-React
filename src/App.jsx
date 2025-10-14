import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = ()=>{
    
  }


  const handleDelete = (e,id)=>{
     let index = todos.findIndex(item=>{
      return item.id === id;
     })

     let newTodos = todos.filter(item =>{
      return item.id !==id
     })
     
     setTodos(newTodos)
  }


  const handleAdd = ()=>{
    setTodos([...todos,{id: uuidv4(),todo,iscompleted:false}])
    setTodo("")
    console.log(todos)
  }

  const handleChange = (e)=>{
    
    setTodo(e.target.value)
  }


  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id == id;
    })

    let newTodos = [...todos]
    newTodos[index].iscompleted = !newTodos[index].iscompleted 
    setTodos(newTodos)  
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

            
           return <div key={item.id} className="todo w-1/4 flex justify-between my-3">
            <input name={item.id} onChange={handleCheckbox} type ="checkbox" value={todo.iscompleted} id="" />
              <div className={item.iscompleted?"line-through" : ""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className=' text-sm font-bold bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1 m-1'>Edit</button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className=' text-sm font-bold bg-violet-800 hover:bg-violet-950 text-white rounded-md p-2 py-1 m-1'>Delete</button>

              </div>

            </div>
              })}
          </div>
        
      </div>
    </>
  )
}

export default App
