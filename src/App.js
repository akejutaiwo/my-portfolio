import React from 'react';
import './App.css';
import { Content, Header, LeftSide, RightSide } from './Components/Icons';


function App() {
  return (
    <div className="App">
      <Header />
      <LeftSide />
      <RightSide/>
      <Content/>
    </div>
  );
}

export default App;