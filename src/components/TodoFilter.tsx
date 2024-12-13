import { todoFilterProps } from "../utils/types"

const TodoFilter = ({param, filter, handleFilter,}:todoFilterProps) => {

  return (
      <p
          className={`${param == filter ? 'text-BrightBlue' : ''} hover:text-VeryDarkBlue dark:hover:text-VeryLightGray cursor-pointer`}
          onClick={() => handleFilter(param)} > {param} </p>
  )
}

export default TodoFilter