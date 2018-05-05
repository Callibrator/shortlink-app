import SimpleSchema from 'simpl-schema'
import {Accounts} from 'meteor/accounts-base'



Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;

    console.log("User: ",user)
    console.log("email: ",email)
    try{
      new SimpleSchema({
        email:{
          type:String,
          regEx: SimpleSchema.RegEx.Email
        }

      }).validate({email})
    }catch(e){
      console.log("somthing")
      throw new Meteor.Error(400,"Wrong Email Address")
    }
    return true;
})
