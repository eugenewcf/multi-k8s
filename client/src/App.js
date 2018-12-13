import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

const divStyle = {
  backgroundColor: "#999",
  marginBottom: "1rem"
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="" style={divStyle}>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Home</Link> | 
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib}/>
            <Route path="/otherpage" component={OtherPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
