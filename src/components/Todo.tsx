import checkIconSrc from "../assets/images/icon-check.svg"
import crossIcon from '../assets/images/icon-cross.svg'
import { TodoProps } from "../utils/types"

const Todo = ({todo, handleDelete, handleComplete}:TodoProps) => {
  return (
   <div >
              <label className='flex group justify-between items-center gap-2 p-2 py-3 sm:py-4 border-b-[1px] text-sm border-b-VeryLightGray dark:border-b-VeryDarkGrayishBlueDarkTwo cursor-pointer'  htmlFor={todo.id}>

                <span className='flex gap-2'>
                <span className='w-4 h-4 dark:border-DarkGrayishBlue border peer has-[:checked]:border-0 rounded-full has-[:checked]:bg-gradient-to-br has-[:checked]:from-GradientStart  has-[:checked]:to-GradientStop hover:border-t-GradientStart hover:border-l-GradientStart hover:border-b-GradientStop hover:border-r-GradientStop flex items-center justify-center'>
                  <input className='hidden peer' name="todo" checked={todo.isCompleted} onChange={()=>handleComplete(todo.id)} type="checkbox" id={todo.id} />
                  <img src={checkIconSrc} alt=""  className='size-2 opacity-0 peer-checked:opacity-100'/>
                </span>
                
                <span className='peer-has-[:checked]:line-through peer-has-[:checked]:text-VeryLightGrayishBlue dark:peer-has-[:checked]:text-VeryDarkGrayishBlue dark:text-VeryLightGrayishBlue hover:text-VeryDarkBlue text-xs '> {todo.name} </span>
                </span>

                <span onClick={()=>handleDelete(todo.id)} className='sm:hidden sm:group-hover:block dark:text-VeryLightGrayishBlue'>
                  <img className='size-3 dark:fill-white' src={crossIcon} alt="crossIcon" />
                </span>

              </label>
            </div>
  )
}

export default Todo