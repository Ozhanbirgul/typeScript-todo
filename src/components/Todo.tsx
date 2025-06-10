import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import type { TodoType } from '../types/Types';

interface todoProps  {
  todoProps: TodoType
}

const Todo = ({todoProps}:todoProps) => {
  const {id, content} = todoProps
  return (
    <div className='flex flex-row items-center justify-between mt-5 border-2 p-3 rounded-md'>
        <div>{content}</div>
        <div className='flex flex-row gap-2'>
            <IoIosRemoveCircleOutline size="1.8em" className='bg-red-500 text-white rounded-md p-1 cursor-pointer'/>
            <MdEdit size="1.8em" className='bg-green-500 text-white rounded p-1 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Todo