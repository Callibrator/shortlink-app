import React from 'react'
import { Accounts } from 'meteor/accounts-base'



export default (props) => {

  return(<div className="header">
    <div className="header__content">
      <h1 className="header__title">{props.title}</h1>

      <button className="button button__link_text" onClick={() => Accounts.logout()}>Log Out</button>

    </div>

  </div>)
}
