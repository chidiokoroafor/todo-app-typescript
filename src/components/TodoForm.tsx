import { TodoFormProps } from "../utils/types"

const TodoForm = ({handleSubmit, handleChange, todoData}:TodoFormProps) => {
  return (
     <form className='mb-4' onSubmit={handleSubmit} action="">
          <input className='w-full rounded caret-BrightBlue py-3 px-9 text-sm border-transparent outline-none dark:bg-VeryDarkDesaturatedBlue dark:text-VeryLightGrayishBlue' type="text" placeholder='Create a new todo..' required value={todoData} onChange={(e)=>handleChange(e.target.value)} />
        </form>
  )
}

export default TodoForm