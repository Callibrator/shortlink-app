import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      error: '',



    }

  }

  onSubmit(e){
    e.preventDefault()
    let email = this.refs.email.value.trim()
    let password = this.refs.password.value.trim()


    Accounts.createUser({email:email,password:password},(err) =>{
      if(err){
            this.setState({
                error: err.reason


            })
      }else{
        this.setState({
            error:''


        })
      }


    })




  }

  render(){
      return (
          <div>
              <h1>Signup</h1>

              {this.state.error?<p>{this.state.error}</p>:''}

              <form onSubmit={this.onSubmit.bind(this)}>
                <input type="email" ref='email' name="email" placeholder="Email"/>
                <input type="password" ref='password' name="password" placeholder="Password"/>
                <button>Create Account</button>

              </form>


              <Link to="/">Already Have An Acount? </Link>
          </div>
        )
  }



}
