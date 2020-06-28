import React from 'react';
import './App.css';
import PageHeader from './Homepage/pageHeader';
import AboutMe from './Homepage/AboutMe';
import Myface from './Homepage/Myface';
import Project1 from './Homepage/Project1';
import Project2 from './Homepage/Project2';
import Project3 from './Homepage/Project3';
import Project4 from './Homepage/Project4';

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="App">
        <header>
          <PageHeader />


          <div className="row">
            <Myface />
            <AboutMe />
          </div>
<div className = "row">
  <Project1 />
  <Project2 />
  <Project3 />
  <Project4 />
  
  
</div>

         
        </header>
      </div>
      </div>
    );
  };
}

export default App;
