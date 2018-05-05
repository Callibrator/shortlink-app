import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor'

export default class Login extends React.Component{
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


    Meteor.loginWithPassword({email:email},password:password,(err) =>{
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
            <div className="boxed-view">
              <div className="boxed-view__box">
                <h1>Log In</h1>
                {this.state.error?<p>{this.state.error}</p>:''}

                <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
                  <input type="email" ref='email' name="email" placeholder="Email"/>
                  <input type="password" ref='password' name="password" placeholder="Password"/>
                  <button className='button'>Log in</button>

                </form>

                <Link to="/signup" className="button button__link">Not having an acount?</Link>
              </div>
            </div>
        )
  }



}
