import './App.css'
import Todo from './Components/todo';
import {Provider} from "react-redux";
import { store } from './app/store';
import AddForm from './components/AddForm';

function App() {
  return (
    <>
      <Provider store={store}>
        <AddForm />
        <Todo />
      </ Provider>
    </>
  )
}

export default App
