import {Meteor} from 'meteor/meteor';
import {Switch , Route,Router,browserHistory,withRouter,Redirect,PrivateRoute} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Tracker } from 'meteor/tracker'

import React from 'react';
import ReactDOM from 'react-dom';

import Signup from './../imports/ui/Signup';
import Links from './../imports/ui/Links';
import NotFound from './../imports/ui/not_found';
import Login from './../imports/ui/login';

const history = createBrowserHistory();

const unathenticatedPages = ['/','/signup','/login']
const authenticatedPages =  ['/links']

function getCurrentLocation(props){
  return this.props.location.pathname
}

const OnEnterPublicPage =  ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !Meteor.userId() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/links",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const OnEnterPrivatePage = ({ component: Component, ...rest }) => (
  <div>
  <Route
    {...rest}
    render={props =>
      Meteor.userId() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
  </div>
);

const routes = (
  <Router history={history}>

    <div>
      <Switch>

        <OnEnterPublicPage exact path="/" component={Login}/>
        <OnEnterPublicPage exact path="/login" component={Login}/>
        <OnEnterPublicPage path="/signup" component={Signup}/>
        <OnEnterPrivatePage path="/links" component={Links} />
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  </Router>

);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = history.location.pathname;

  const isUnathenticatedPage = unathenticatedPages.includes(pathname)
  const isAthenticatedPage = authenticatedPages.includes(pathname)

  if(isUnathenticatedPage && isAuthenticated)
  {
    history.replace("/links")

  }

  if(isAthenticatedPage && !isAuthenticated){
    history.replace("/")
  }

  console.log(pathname,isAuthenticated,isAthenticatedPage,isUnathenticatedPage)
})

Meteor.startup(()=>{
  ReactDOM.render(routes,document.getElementById("app"))


})
