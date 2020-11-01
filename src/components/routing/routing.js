import React    from "react";
import Home from "../home/home";
import { Switch, Route, Redirect } from 'react-router-dom';

class Routing extends React.Component {

  constructor(props){
    super(props);
    this.state={ }
  }

  render() {
    return (
      <routes>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path='/home' component={Home}/>
        </Switch>
      </routes>
    )
  }
}

export default Routing;
