import Todo from './Todo'
import { useSelector } from 'react-redux'
import type { TodoType } from '../types/Types'
import type { RootState } from '../redux/store'

const TodoList = () => {
  const {todos} = useSelector((state:RootState) => state.todo)
  return (
    <div>
      {todos && todos.map((todo:TodoType) => (
        <Todo key={todo.id} todoProps = {todo}/>
      ))}
    </div>
  )
}

export default TodoList