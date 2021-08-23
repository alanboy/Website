import React from 'react';
import './App.css';

// importing boostrap into the app
// import 'bootstrap/dist/css/bootstrap.css';

// import individual components into this page

import NavBar from './components/NavBar';
// import Footer from './components/Footer';

// importing React Router to make nav bar functional
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// page components
import HomePage from './HomePage/HomePage';
import TeamsPage from './TeamsPage/TeamsPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          {/* use for the navigation bar, just follow this pattern to route the path on the url to the pages */}
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/Teams" component={TeamsPage}></Route>
          <Route exact path="/projects" component={ProjectsPage}></Route>

        </Switch>
        <div id="contact">
            {/* <Footer/> */}
        </div>
      </div>
    </Router>
  );
}

export default App;