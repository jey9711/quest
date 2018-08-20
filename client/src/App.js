import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';

// P A G E S
import HomePage from './pages/HomePage';
import GradesPage from './pages/GradesPage';
import GradesDetailPage from './pages/GradesDetailPage';
import FinancesPage from './pages/FinancesPage';
import FinancesDetailPage from './pages/FinancesDetailPage';

// C O M P O N E N T S
import MainMenu from './components/MainMenu';

import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <MainMenu />
          </header>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/grades" component={GradesPage} />
            <Route exact path="/grades/:termCode" component={GradesDetailPage} />
            <Route exact path="/finances" component={FinancesPage} />
            <Route exact path="/finances/:termCode" component={FinancesDetailPage} />
          </div>
          <p className="App-intro">{this.state.response}</p>
        </div>
      </Router>
    );
  }

}

export default App;