import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskComponent from './components/TaskComponent';
import TaskFactoryComponent from './components/TaskFactoryComponent';

function App() {
  return (
    <div className="App">
      <TaskComponent />
      <TaskFactoryComponent />
    </div>
  );
}

export default App;
