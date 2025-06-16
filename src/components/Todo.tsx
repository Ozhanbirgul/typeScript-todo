import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import type { TodoType } from '../types/Types';
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

interface TodoProps {
  todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);

  const [newTodo, setNewTodo] = useState<string>(content)

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id))
  }

  const handleUpDateTodo = () => {
    const payload = {
      id : id,
      content : newTodo
    }
    dispatch(updateTodo(payload))
    setEditable(false)
  }

  return (
    <div className='flex flex-row items-center justify-between mt-5 border-2 p-3 rounded-md'>
      {editable ? <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>) => 
        setNewTodo(e.target.value)} type="text" /> : <div>{content}</div>}
      <div className='flex flex-row gap-2'>
        <IoIosRemoveCircleOutline onClick={handleRemoveTodo} size="1.8em" className='bg-red-500 text-white rounded-md p-1 cursor-pointer' />
        {editable ? 
        <FaCheck 
        onClick={() => handleUpDateTodo()}
        size={'1.8rem'} 
        className='bg-orange-500 text-white rounded-md p-2 cursor-pointer' 
        /> : <MdEdit onClick={() => setEditable(true)} size="1.8em" className='bg-green-500 text-white rounded p-1 cursor-pointer' />}
      </div>
    </div>
  )
}

export default Todo