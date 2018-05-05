import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'
import shortid from 'shortid'

export const Links = new Mongo.Collection('links')

if(Meteor.isServer){
    Meteor.publish('anything',function() {
      if(this.userId){
        return Links.find({uid:this.userId},{sort: {lastVisitedAt: -1}});
      }
    })
}

Meteor.methods({
  'links.insert'(url){
    if(!this.userId){
      throw Meteor.Error('User Is Not Logged In')
    }

    if(!url){
      throw Meteor.Error('URL is Required')
    }


    new SimpleSchema({
      url:{
        type:String,
        regEx:SimpleSchema.RegEx.Url,
        min:2
      }

    }).validate({url})


    Links.insert({url,uid:this.userId,_id:shortid.generate(),visible:true,visitedCount:0,lastVisitedAt:null})


  },

  'links.setVisibility'(_id,visible){
      if(!this.userId)
        throw Meteor.error('User is not logged in')

      new SimpleSchema({
          _id:{
            type:String,
            min:1
          },
          visible:{
            type:Boolean
          }


        }).validate({_id,visible})

      Links.update({
        _id,
        uid:this.userId
      },{
        $set:{
          visible
        }})
  },

  'links.trackVisit'(_id){
    Links.update({
      _id
    },{
      $set: {

        lastVisitedAt: new Date().getTime()
      },
      $inc: {
        visitedCount: 1
      }
    })
  }

})
