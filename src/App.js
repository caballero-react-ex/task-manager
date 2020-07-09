import React from 'react';
import './main.scss';

import Header from './02_comps/Header';
import TodoList from './02_comps/TodoList';

function App() {
  return (
    <div className="App main-grid">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
