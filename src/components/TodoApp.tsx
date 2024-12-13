
import ThemeToggle from './ThemeToggle'
import { FormEvent,  useState } from "react"
import { allTodos, todoFilter } from "../utils/data"
import TodoFilter from "./TodoFilter"
import TodoList from "./TodoList"
import TodoForm from './TodoForm'
import { Ttodo } from '../utils/types'



const TodoApp = () => {

 const [todoData, setTodoData] = useState("")
  const [filter, setFilter] = useState("All")
  const [todos, setTodos] = useState<Ttodo[]>(():Ttodo[] =>{
    const localValue = localStorage.getItem("TODOS");
    if(!localValue) return allTodos;
    return JSON.parse(localValue);
  })

  const activeTodos = todos.filter((t) => {
    return !t.isCompleted
  })

  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    setTodos(prev => {
        const todo = { id: crypto.randomUUID(), name: todoData, isCompleted: false }
        const newTodos = [...prev, todo]
        localStorage.setItem("TODOS", JSON.stringify(newTodos))
      return newTodos
    })
    setTodoData("")
  }

  function handleComplete(id:string) {
    setTodos(prev => {
      const targetTodo = todos.find(t => t.id == id);
      if (targetTodo) {
        const newTodos:Ttodo[] = prev.map((td) => {
          if (td.id == targetTodo.id) {
            return {...td, isCompleted:!td.isCompleted}
          }
          return td
        })
        localStorage.setItem("TODOS", JSON.stringify(newTodos))
        return newTodos
      } else {
          return prev
      }
    })
  }

  function handleFilter(param:string) {
    setFilter(param)
    if (param == "All") {
      setTodos(()=>{
        const localValue = localStorage.getItem("TODOS");
        if(!localValue) return [];
        return JSON.parse(localValue);
      })
    }else if (param=="Active") {
      setTodos(()=>{
        const localValue = localStorage.getItem("TODOS");
        if(!localValue) return [];
        const data = JSON.parse(localValue)
        return data.filter((d:Ttodo) => {
          return !d.isCompleted
          });
      })
    }else if (param=="Completed") {
      setTodos(()=>{
        const localValue = localStorage.getItem("TODOS");
        if (!localValue) return [];
        const data = JSON.parse(localValue)
        return data.filter((d:Ttodo) => {
          return d.isCompleted
        });
      })
    }
  }

  function handleClearCompleted() {
     setTodos(()=>{
        const localValue = localStorage.getItem("TODOS");
        if (localValue){
          const data = JSON.parse(localValue)
          const activeTodos =  data.filter((d:Ttodo) => {
            return !d.isCompleted
          });
          localStorage.setItem("TODOS", JSON.stringify(activeTodos))
          return activeTodos;
        }
      })
  }

  function handleDelete(id:string) {
    setTodos(()=>{
        const localValue = localStorage.getItem("TODOS");
        if (localValue){
          const data = JSON.parse(localValue)
          const remainigTodo =  data.filter((d:Ttodo) => {
            return d.id != id
          });
          localStorage.setItem("TODOS", JSON.stringify(remainigTodo))
          return remainigTodo;
        }
      })
  }

    function handleChange(data: string) {
        setTodoData(data)
    }

  return (
    
      <div className="w-[85%] sm:w-[95%] z-10 max-w-[450px] -mt-44 sm:-mt-44 mx-auto font-Josefin text-[18px]">

        <div className='flex justify-between items-center mt-6 mb-5 text-VeryLightGray'>
          <h2 className='text-2xl sm:text-3xl font-bold'>T O D O</h2>
          <ThemeToggle />
        </div>

       <TodoForm todoData={todoData} handleChange={handleChange} handleSubmit={handleSubmit} />

          <TodoList
              handleClearCompleted={handleClearCompleted}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleFilter={handleFilter}
              todos={todos}
              activeTodos={activeTodos}
              filter={filter}
          />

        <div className='flex justify-center mt-4 sm:mt-6 bg-white shadow-lg dark:bg-VeryDarkDesaturatedBlue dark:text-VeryDarkGrayishBlue  gap-2 py-3 px-3 sm:hidden border-b-1 text-xs text-DarkGrayishBlue'>
          
             <div className='flex justify-around sm:justify-between items-center gap-4'>
              {todoFilter.map((tf, i) => {
                  return <TodoFilter key={i} param={tf} filter={filter} handleFilter={handleFilter} />
              })} 
            </div>

         </div>

        <p className='text-center mt-7 sm:mt-10 text-DarkGrayishBlue text-xs'>Drag and drop to render list.</p>

      </div>
  )
}

export default TodoApp