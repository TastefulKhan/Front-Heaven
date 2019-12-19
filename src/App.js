import React from 'react';
import './App.css';
import Bio from './components/Bio';
import Education from './components/Education'

class App extends React.Component {
    render(){
    return (
      <div className="App">
        <header className="App-header">
          <Bio />
          <Education />
          <p>
            Time test it's 9:48AM.
          </p>

        </header>
      </div>
    );
  }
}

export default App;
