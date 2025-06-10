import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';

const TodoCreate = () => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>('');

  const handleCreateTodo = () => {
    if(newTodo.trim().length==0){
      alert("todo giriniz!")
      return;
    }

    const payload = {
      id: Math.floor(Math.random()*9999999),
      content: newTodo
    }
    dispatch(createTodo(payload))
    setNewTodo('');
  }

  return (
    <div className='todo-create w-[500px] flex flex-col items-end justify-center mt-8'>
      <input 
      value={newTodo}
      onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
      placeholder='Todo Giriniz...' className='border w-[100%] border-0 border-b-2 outline-none' type="text" />
      <button onClick={handleCreateTodo} className='border-0 py-2 px-3 mt-2 text-white bg-blue-400 font-semibold pointer'>Oluştur</button>
    </div>
  )
}

export default TodoCreate