import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './index.css';
import Header from './components/header';

function App() {
  const [state, setState]= useState({});

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Container text>
          <div className="page-content-container" />
          <h1>Shalom There!</h1>
        </Container>
      </main>
    </div>
  );
}

export default App;
