import React from 'react'

const TodoCreate = () => {
  return (
    <div className='todo-create w-[500px] flex flex-col items-center justify-center mt-8'>
      <input type="text" className='border w-[100%] border-0 border-b-2 outline-none' />
      <button>Oluştur</button>
    </div>
  )
}

export default TodoCreate