import React ,{useState} from 'react'
import './App.css';
import AddTask from './components/AddTask'

function App() {

  return (
    <div style={{margin:'5%'}}>
      <h1>Welcome to taskrr</h1>
      <AddTask/>
    </div>
  );
}

export default App;
