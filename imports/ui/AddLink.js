import React from 'react';
import {Meteor} from 'meteor/meteor'
import Modal from 'react-modal'

export default class AddLink extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      url:"",
      isOpen:false,
      error:''
    }
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  onSubmit(e){
    const url = this.state.url.trim()

    e.preventDefault()


    if(Meteor.userId()){
      Meteor.call('links.insert',url,(err,res)=>{
        if(!err){
          this.handleModelClose()
        }else{
          this.setState({error:err.reason})
        }

      })
      //Links.insert({url,uid:Meteor.userId()})

    }


  }

  onChange(e){
    this.setState({
      url:e.target.value
    })
  }
  handleModelClose(){
    this.setState({
      isOpen: false,
      url:'',
      error:''
    })
  }
  render(){
    return (<div>
    <button className="button" onClick={()=>{
      this.setState({
        isOpen:true,

      })
    }}>+ Add Link</button>
    <Modal className="boxed-view__box" overlayClassName="boxed-view boxed-view__modal"  isOpen={this.state.isOpen} contentLabel="Add Link" onAfterOpen={() => {this.refs.url.focus()}} onRequestClose={this.handleModelClose.bind(this)}>
    <h1>Add Link</h1>
    {this.state.error?<p>{this.state.error}</p>:null}
    <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)}>
      <input type="text" ref='url' placeholder="url" value={this.state.url} ref='url' onChange={this.onChange.bind(this)} />
      <input className="button" type="submit" value="add link" />
      <button type="button" className="button button__secondary" onClick={this.handleModelClose.bind(this)}>Cancel</button>
    </form>

    </Modal>
    </div>)
  }
}
