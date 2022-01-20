import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import ErrorBoundry from '../error-boundry';
import {
  Contacts,
  Footer,
  Home,
  Navibar,
  Plants,
  AddPlants,
  LoginPage
} from '../pages';

export default class App extends Component {

  state = {
    // swapiService: new SwapiService(),
    isLoggedIn: true
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <>
        <ErrorBoundry>
          {/* <SwapiServiceProvider value={this.state.swapiService}> */}
          <Router>
            <Navibar />
            <div className="d-flex flex-column min-vh-100">
              <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/plants" element={<Plants />} />
                <Route exact path="/add-plants" element={<AddPlants />} />
                <Route exact path="/contacts" element={<Contacts />} />
                <Route
                  path="/login"
                  element={<LoginPage
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin} />
                  } />
                <Route
                  path="/add-plants"
                  element={<AddPlants
                    isLoggedIn={isLoggedIn} />} />
                <Route
                  path="*"
                  element={<Navigate to="/home" />} />
              </Routes>
            </div>
          </Router>
          <Footer className="mt-auto" />
          {/* </SwapiServiceProvider> */}
        </ErrorBoundry>
      </>
    );
  }
}





