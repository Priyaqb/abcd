import React from 'react';
import Header from './Components/Header/Header'

import './App.css';

class App extends React.Component {
  state = {
    link: [
      {name: 'First'},
      {name: 'Second'},
      {name: 'Third'}
    ]
  }

  switchHandler = (newLink) => {
    this.setState({
      link: [
        {name: newLink},
        {name: 'New Second'},
        {name: 'New Third'}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      link: [
        {name: 'First'},
        {name: event.target.value},
        {name: 'New Third'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchHandler.bind(this,'Button click')}>Switch Link</button>
        <Header click={this.switchHandler.bind(this, 'Binded Link')} link={this.state.link[0].name} />
        <Header 
          link={this.state.link[1].name} 
          changed={this.nameChangeHandler}
        />
        <Header link={this.state.link[2].name} />
      </div>
      // React.createElement('div',{className:"App"},React.createElement('h1','null','Hi There'))
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
