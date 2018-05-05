import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp'
import '../imports/startup/simple-schema-configuration'

import {Links} from '../imports/api/links'

import '../imports/api/users'
import '../imports/api/links'


Meteor.startup(() => {
  WebApp.connectHandlers.use((req,res,next)=>{
    const _id = req.url.slice(1)
    const lnk = Links.findOne({_id})


    if(lnk){
      res.statusCode = 302
      res.setHeader('Location',lnk.url)


      Meteor.call('links.trackVisit',_id)
      res.end()
    }

    next()
  })
});
