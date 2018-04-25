//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';
import {BrowserRouter as Router, Route,hashHistory, IndexRoute,  Link, NavLink, Redirect, Prompt } from "react-router-dom";
//import createHistory from 'history/createBrowserHistory'
import { createHashHistory } from 'history'
export const history = createHashHistory()

//the style for the main header
const header={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'200px',
  fontFamily: 'Lobster',
};
//the style for number
const number={
  color:'#7a00a3',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};
//the style for first name
const fName={
  color:'#7a00a3',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};
//the style for last name
const lName={
  color:'#7a00a3',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};


/*
number
firstName
lastName
gender
age
phone
conditions
past_Diseases
currentlly_Medications
genetic_Diseases
allergies
description

*/


//the style for the user
const user={
  color:'#1B5494',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};
//the style for the password
const password={
  color:'#bb280e',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};
//the style for the user and password input
const input={
  padding: '10px 10px 10px 10px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  color:'black',
  fontSize:'15px',
  border: '2px solid black',
  borderRadius: '15px',
};
//the style for the button Sign Up
const button={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  marginTop:'20px',
  fontSize:'20px',
  borderRadius: '10px',
  fontFamily: 'Lobster',
};

//the page login what inside render
class Write extends React.Component {
  //constructor to undestand state
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
      firstName:'',
      lastName: '',
      userName: '',
      password: ''
    };
  }
  //when change  ... change the
  //first name
  onWrite1 (e) {
    this.setState({
      firstName: e.target.value,
    });
  };
  //last name
  onWrite2 (e) {
    this.setState({
      lastName: e.target.value,
    });
  };
  //username
  onWrite3 (e) {
    this.setState({
      userName: e.target.value,
    });
  };
  //password
  onWrite4 (e) {
    this.setState({
      password: e.target.value,
    });
  };
  //for sign in button
  signup() {
    window.location.href= window.location.origin+'/signup'
  };
    //for sign in button
  login() {
    window.location.href= window.location.origin+'/login'
  };
  //what render -----------------need change style to be nice
  render () {
    return (
      <Router history={hashHistory}>
        <div>
          <h2 style={header}>Home page</h2>
  
          <button onClick={this.signup.bind(this)} style={button}>Sign Up</button>
          <button onClick={this.login.bind(this)} style={button}>Login</button>
          <button onClick={() => history.push('/signup')} style={button}>redirect Sign Up</button>
  
        </div>
      </Router>

    )
  }
}
//export this component to can use
export default Write;










/*
//this page only to see if it is work or not the router
//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';
//the style for the two main header
const header={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'40px',
};
///
//the page home what inside render
class Home extends React.Component {
  //constructor to undestand state
  constructor(){
    super();
    this.state={
    };
  }
  //what render -----------------need change style to be nice
  render () { 
    return (
      <div>
        <h2 style={header}>You Are In Home Page </h2>
      </div>
    )
  }
}
//export this component to can use
export default Home;
*/


