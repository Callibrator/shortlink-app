import {Meteor} from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'

import React from 'react';
import ReactDOM from 'react-dom';

import {routes,onAuthChange} from '../imports/routes/routes'
import {Links} from '../imports/api/links'
import '../imports/startup/simple-schema-configuration'



Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated)
})

Tracker.autorun(() => {
  console.log(Links.find().fetch())

})


Meteor.startup(()=>{

  ReactDOM.render(routes,document.getElementById("app"))


})
