import { FormEventHandler, useState } from 'react'
import { allTodos, todoFilter } from './utils/data'
import checkIconSrc from "./assets/images/icon-check.svg"
import ThemeToggle from './components/ThemeToggle'
import crossIcon from './assets/images/icon-cross.svg'


function App() {
  const [todoData, setTodoData] = useState("")
  const [filter, setFilter] = useState("All")
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("TODOS");
    if(!localValue) return allTodos;
    return JSON.parse(localValue);
  })

  const activeTodos = todos.filter((t) => {
    return !t.isCompleted
  })

  function handleSubmit(e:FormEventHandler<HTMLFormElement>) {
    e.preventDefault();
    setTodos(prev => {
      const todo = {id: crypto.randomUUID(), name:todoData, isCompleted:false}
      return [...prev, todo]
    })
    localStorage.setItem("TODOS", JSON.stringify(todos))
    setTodoData("")
  }

  function handleComplete(id:string) {
    setTodos(prev => {
      const targetTodo = todos.find(t => t.id == id);
      if (targetTodo) {
        const newTodos = prev.map((td) => {
          if (td.id == targetTodo.id) {
            return {...td, isCompleted:!td.isCompleted}
          }
          return td
        })
        localStorage.setItem("TODOS", JSON.stringify(newTodos))
        return newTodos
      }
      
    })
   
  }

  function handleFilter(param) {
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
        return data.filter((d) => {
          return !d.isCompleted
          });
      })
    }else if (param=="Completed") {
      setTodos(()=>{
        const localValue = localStorage.getItem("TODOS");
        if (!localValue) return [];
        const data = JSON.parse(localValue)
        return data.filter((d) => {
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
          const activeTodos =  data.filter((d) => {
            return !d.isCompleted
          });
          localStorage.setItem("TODOS", JSON.stringify(activeTodos))
          return activeTodos;
        }
      })
  }

  function handleDelete(id) {
    setTodos(()=>{
        const localValue = localStorage.getItem("TODOS");
        if (localValue){
          const data = JSON.parse(localValue)
          const remainigTodo =  data.filter((d) => {
            return d.id != id
          });
          localStorage.setItem("TODOS", JSON.stringify(remainigTodo))
          return remainigTodo;
        }
      })
  }

  return (
    <main className="min-w-full min-h-screen relative bg-VeryLightGray dark:bg-VeryDarkBlue" >
      <div className='h-[30vh] sm:h-[40vh] w-full  top-0 right-0 left-0 bg-mobile-light sm:bg-desktop-light dark:sm:bg-desktop-dark dark:bg-mobile-dark bg-no-repeat bg-cover z-0' ></div>

      <div className="w-[85%] sm:w-[95%] z-10 max-w-[450px] -mt-44 sm:-mt-44 mx-auto font-Josefin text-[18px]">

        <div className='flex justify-between items-center mt-6 mb-5 text-VeryLightGray'>
          <h2 className='text-2xl sm:text-3xl font-bold'>T O D O</h2>
          <ThemeToggle />
          {/* <img className='cursor-pointer' src={moonIcon} alt="moon icon" /> */}
        </div>

        <form className='mb-4' onSubmit={handleSubmit} action="">
          <input className='w-full rounded caret-BrightBlue py-3 px-9 text-sm border-transparent outline-none dark:bg-VeryDarkDesaturatedBlue dark:text-VeryLightGrayishBlue' type="text" placeholder='Create a new todo..' required value={todoData} onChange={(e)=>setTodoData(e.target.value)} />
        </form>

        <div className='bg-white dark:bg-VeryDarkDesaturatedBlue rounded text-VeryDarkGrayishBlue shadow-lg sm:shadow-2xl'>

          {todos.map((td) => {
            return <div key={td.id}>
              <label className='flex group justify-between items-center gap-2 p-2 py-3 sm:py-4 border-b-[1px] text-sm border-b-VeryLightGray dark:border-b-VeryDarkGrayishBlueDarkTwo cursor-pointer'  htmlFor={td.id}>

                <span className='flex gap-2'>
                <span className='w-4 h-4 dark:border-DarkGrayishBlue border peer has-[:checked]:border-0 rounded-full has-[:checked]:bg-gradient-to-br has-[:checked]:from-GradientStart  has-[:checked]:to-GradientStop hover:border-t-GradientStart hover:border-l-GradientStart hover:border-b-GradientStop hover:border-r-GradientStop flex items-center justify-center'>
                  <input className='hidden peer' name="todo" checked={td.isCompleted} onChange={()=>handleComplete(td.id)} type="checkbox" id={td.id} />
                  <img src={checkIconSrc} alt=""  className='size-2 opacity-0 peer-checked:opacity-100'/>
                </span>
                
                <span className='peer-has-[:checked]:line-through peer-has-[:checked]:text-VeryLightGrayishBlue dark:peer-has-[:checked]:text-VeryDarkGrayishBlue dark:text-VeryLightGrayishBlue hover:text-VeryDarkBlue text-xs '> {td.name} </span>
                </span>

                <span onClick={()=>handleDelete(td.id)} className='sm:hidden sm:group-hover:block'>
                  <img className='size-3' src={crossIcon} alt="crossIcon" />
                </span>

              </label>
            </div>
          })}

          <div className='flex justify-between  dark:bg-VeryDarkDesaturatedBlue dark:text-VeryDarkGrayishBlue gap-2 py-3 px-3 border-b-1 text-xs text-DarkGrayishBlue'>
            <p className=' '>{activeTodos.length} items left</p>

            <div className='sm:flex justify-around sm:justify-between items-center hidden gap-4'>
              {todoFilter.map((tf, i) => {
                return <p className={`${tf==filter ? 'text-BrightBlue':''} hover:text-VeryDarkBlue dark:hover:text-VeryLightGray cursor-pointer`} onClick={()=>handleFilter(tf)} key={i}> {tf} </p>
              })}
              
            </div>
            <p className='cursor-pointer hover:text-VeryDarkBlue dark:hover:text-VeryLightGray' onClick={handleClearCompleted}>Clear Completed</p>
          </div>

        </div>

        <div className='flex justify-center mt-4 sm:mt-6 bg-white shadow-lg dark:bg-VeryDarkDesaturatedBlue dark:text-VeryDarkGrayishBlue  gap-2 py-3 px-3 sm:hidden border-b-1 text-xs text-DarkGrayishBlue'>
          
             <div className='flex justify-around sm:justify-between items-center gap-4'>
              {todoFilter.map((tf, i) => {
                return <p className={`${tf==filter ? 'text-BrightBlue':''} hover:text-VeryDarkBlue dark:hover:text-VeryLightGray cursor-pointer`} onClick={()=>handleFilter(tf)} key={i}> {tf} </p>
              })} 
            </div>

         </div>

        <p className='text-center mt-7 sm:mt-10 text-DarkGrayishBlue text-xs'>Drag and drop to render list.</p>

      </div>
      
    </main>
  )
}

export default App
