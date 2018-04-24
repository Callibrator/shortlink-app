import React from 'react';
import { Accounts } from 'meteor/accounts-base'
import { Link } from 'react-router-dom';

export default class Links extends React.Component{
  constructor(props){
    super(props)

  }
  logout(){

    Accounts.logout()
  }
  render(){

      return (<div>
            <h1>Your Links</h1>
<Link to="/signup">Not having an acount?</Link>
            <button onClick={this.logout.bind(this)}>Log Out</button>

        </div>)

  }



}

///export default withRouter(Link)
