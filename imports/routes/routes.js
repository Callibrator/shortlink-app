import {Switch , Route,Router,browserHistory,withRouter,Redirect,PrivateRoute} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import React from 'react';
import ReactDOM from 'react-dom';

import Signup from './../ui/Signup';
import Links from './../ui/Links';
import NotFound from './../ui/not_found';
import Login from './../ui/login';

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

export const onAuthChange = (isAuthenticated) => {

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


}

export const routes = (
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
