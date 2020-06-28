import React from 'react';
import './App.css';
import PageHeader from './Homepage/pageHeader';
import AboutMe from './Homepage/AboutMe';

class App extends React.Component{
  render(){
  return (
    <div className="App">
   <header>
   <PageHeader/>  
   <AboutMe />
   
   <div className="boxed"> 
 words test 
   </div>
     </header> 
    </div>
  );
};
}

export default App;
