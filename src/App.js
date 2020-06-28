import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Media } from 'react-bootstrap';
import FormDataComponent from './form-data-component';
import CommentsComponent from './comments-component';
import ManagerFormDataComponent from './manager-form-data-component';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">DESHAW</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-2">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item mr-2">
                <Link to="/manager">Manager</Link>
              </li>
              <li className="nav-item mr-2">
                <Link to="/employs">Employs</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/manager">
            <Manager />
          </Route>
          <Route path="/employs">
            <Employs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Manager() {
  return(
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-2">
          <Media>
            <img
              width={40}
              height={40}
              className="mr-3"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Adam Blake</h5>
              <p>
                Member Technical | IT Department | Reports To: Employee
              </p>
            </Media.Body>
          </Media>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="formBox">
              <div className="formHeading">
                <label className="mb-0">Check-in Summary</label>
              </div>
              <div className="formBody">
                <ManagerFormDataComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="commentsSection mt-4">
        <div className="container-fluid">
          <CommentsComponent /> 
        </div>
      </div>
    </div>
  );
}

function Employs() {
  let match = useRouteMatch();

  return (
    <div>
      <div className="container-fluid">
        <h2>Employees</h2>

        <ul className="list-unstyled">
          <li>
            <Link to={`${match.url}/employee-one`}>Employee 1</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path={`${match.path}/:employeeId`}>
          <Employee />
        </Route>
        <Route path={match.path}>
          <h3>Please select a Employee.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Employee() {
  let { employeeId } = useParams();
  return(
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <Media>
            <img
              width={40}
              height={40}
              className="mr-3"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Employee 1</h5>
              <p>
                Member Technical | IT Department | Reports To: Manager
              </p>
            </Media.Body>
          </Media>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="formBox">
              <div className="formHeading">
                <label className="mb-0">Check-in Summary</label>
              </div>
              <div className="formBody">
                <FormDataComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="commentsSection mt-4">
        <div className="container-fluid">
          <CommentsComponent /> 
        </div>
      </div>
    </div>
  );
  // return <h3>Selected Employee: {employeeId}</h3>;
}