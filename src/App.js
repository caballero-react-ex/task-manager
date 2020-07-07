import React from 'react';

// import './App.scss';

import TodoList from './02_comps/TodoList';
import Header from './02_comps/Header';

function App() {
  return (
    <div className="App main-grid">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
