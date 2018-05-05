import React from 'react'
import Clipboard from 'clipboard'
import {Meteor} from 'meteor/meteor'
import moment from 'moment'

export default class LinksListItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      copy:false
    }
  }
  componentDidMount(){
    this.clipboard = new Clipboard(this.refs.copy)

    this.clipboard.on('success',()=>{
      this.setState({
        copy:true
      })
      setTimeout(()=>{this.setState({copy:false})},1000)
    }).on('error',()=>{
      alert('Unable to copy text, Please do it manually')
    })
  }
  componentWillUnmount(){
    this.clipboard.destroy()

  }
  renderStats(){
    const visitMessage = this.props.visitedCount ==1?"visit":"visits"
    let lastVisited = null;


    if(typeof this.props.lastVisitedAt === 'number'){
        lastVisited = `(visited ${ moment(this.props.lastVisitedAt).fromNow() })`
    }

    return <p className="item_message">{this.props.visitedCount} {visitMessage} {lastVisited} </p>
  }
  render(){
    return(<div className="item">
      <h2>{this.props.url}</h2>
      <p className="item_message">{this.props.shortUrl}</p>

      {this.renderStats()}
      <button className="button button__pill" ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.copy?"copied":"copy"}</button>
      <button className="button button__pill" ref="hide" onClick={()=> Meteor.call("links.setVisibility",this.props._id,!this.props.visible)}>{this.props.visible?"hide":"unhide"}</button>
      <a className="button button__pill" href={this.props.shortUrl} target="_blank">
        Visit
      </a>
    </div>)
  }
}
