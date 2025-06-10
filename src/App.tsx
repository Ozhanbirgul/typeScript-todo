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
      <ToastContainer />
    </div>
  )
}

export default App
