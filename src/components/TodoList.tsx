import { todoFilter } from "../utils/data"
import { TodoListProps } from "../utils/types"
import Todo from "./Todo"
import TodoFilter from "./TodoFilter"

const TodoList = ({ handleDelete, handleComplete, todos, activeTodos, filter, handleFilter, handleClearCompleted}:TodoListProps) => {
  return (
    <div className='bg-white dark:bg-VeryDarkDesaturatedBlue rounded text-VeryDarkGrayishBlue shadow-lg sm:shadow-2xl'>
          {todos.map((td) => {
            return <Todo key={td.id} todo={td} handleDelete={handleDelete} handleComplete={handleComplete} />
          })}

          <div className='flex justify-between  dark:bg-VeryDarkDesaturatedBlue dark:text-VeryDarkGrayishBlue gap-2 py-3 px-3 border-b-1 text-xs text-DarkGrayishBlue'>
            <p className=' '>{activeTodos.length} items left</p>

            <div className='sm:flex justify-around sm:justify-between items-center hidden gap-4'>
              {todoFilter.map((tf, i) => {
                  return <TodoFilter key={i} param={tf} filter={filter} handleFilter={handleFilter} />
              })}
              
            </div>
            <p className='cursor-pointer hover:text-VeryDarkBlue dark:hover:text-VeryLightGray' onClick={handleClearCompleted}>Clear Completed</p>
          </div>
        </div>
  )
}

export default TodoList