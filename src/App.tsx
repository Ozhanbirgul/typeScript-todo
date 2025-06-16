import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className=''>
      <TodoCreate />
      <TodoList />
      <ToastContainer 
      position="top-right" 
      autoClose={2000} 
      hideProgressBar={false} 
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </div>
  )
}

export default App
