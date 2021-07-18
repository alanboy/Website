import React from 'react';
import './App.css';

//importing boostrap into the app
import 'bootstrap/dist/css/bootstrap.css';

//import individual components into this page

// import NavBar from './components/NavBar';
// import Footer from './components/Footer'

//importing React Router to make nav bar functional
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//page components
// import AboutPage from './AboutMe/AboutMe';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          {/* <Route exact path="/" component={HomePage}></Route> */}

        </Switch>
        <div id = "contact">
            <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;