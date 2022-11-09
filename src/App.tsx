import React from 'react';
import './App.css';
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <div style={{ padding: '50px' }}>
      <h1 style={{ marginBottom: '20px' }}>memo-app</h1>
      <Main />
    </div>
  );
}

export default App;
