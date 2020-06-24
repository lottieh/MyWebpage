import React from 'react';
import belguimGarden from './belguimGarden.jpg';
import './App.css';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={belguimGarden} className="App-logo" alt="logo" />
        <h1>
          Charlotte House Portfolio
        </h1>
        
      </header>
    </div>
  );
}}''

export default App;
