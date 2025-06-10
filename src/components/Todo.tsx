import React from 'react';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Todo = () => {
  return (
    <div className='flex flex-row items-center justify-between mt-5 border-2 p-3 rounded-md'>
        <div>Ben ilk todoyum.</div>
        <div className='flex flex-row gap-2'>
            <IoIosRemoveCircleOutline size="1.8em" className='bg-red-500 text-white rounded-md p-1 cursor-pointer'/>
            <MdEdit size="1.8em" className='bg-green-500 text-white rounded p-1 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Todo