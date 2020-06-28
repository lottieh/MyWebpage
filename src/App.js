import React from 'react';
import './App.css';
import PageHeader from './Homepage/pageHeader';
import AboutMe from './Homepage/AboutMe';
import Myface from './Homepage/Myface';

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


          <div className="boxed">
            words test
   </div>
        </header>
      </div>
      </div>
    );
  };
}

export default App;
