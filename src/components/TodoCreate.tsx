import React from 'react'

const TodoCreate = () => {
  return (
    <div className='todo-create w-[500px] flex flex-col items-end justify-center mt-8'>
      <input placeholder='Todo Giriniz...' className='border w-[100%] border-0 border-b-2 outline-none' type="text" />
      <button className='border-0 py-2 px-3 mt-2 text-white bg-blue-400 font-semibold pointer'>Oluştur</button>
    </div>
  )
}

export default TodoCreate