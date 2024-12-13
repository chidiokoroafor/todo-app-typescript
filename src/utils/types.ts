import { FormEvent } from "react"

export interface Ttodo  {
    id: string
    name: string
    isCompleted: boolean
}

export type todoFilterProps = {
    param: string
    filter: string
    handleFilter: (param:string)=>void
}

export type TodoListProps = {
    handleDelete: (id: string) => void
    handleComplete: (id: string) => void
    todos: Ttodo[]
    activeTodos: Ttodo[]
    filter: string
    handleFilter: (param: string) => void
    handleClearCompleted: () => void
}

export type TodoFormProps = {
    handleSubmit:(param: FormEvent) => void
     handleChange: (param: string) => void
    todoData: string
}

export type TodoProps = {
     handleDelete: (id: string) => void
    handleComplete: (id: string) => void
    todo:Ttodo
}