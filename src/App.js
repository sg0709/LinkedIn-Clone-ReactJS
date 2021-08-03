
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { getUserAuth } from './actions';


function App(props) {

  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route exact path='/home'>
            <Header/>
            <Home/>
          </Route>          
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
