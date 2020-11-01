import './home.css';
import { Redirect } from 'react-router-dom'
import React from "react";

class home extends React.Component {

constructor(props) {}

  render() {   
    return <Redirect to='/home' />;
  }
}

export default home;
