import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
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
  AddPlants
} from '../pages';
import AddPlants from '../pages/add-plants/add-plants';







export default class App extends Component {

  render() {

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
                  element={<Navigate to="/" />} />
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





