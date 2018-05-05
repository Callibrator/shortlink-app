import React from 'react'
import { Tracker } from 'meteor/tracker'
import {Links} from '../api/links'
import {Meteor} from 'meteor/meteor'
import {Session} from 'meteor/session'
import FlipMove from 'react-flip-move'

import LinksListItem from './LinksListItem'

export default class LinksList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      links_list: []
    }

    Session.set('showVisible',true);

    this.renderLinksListItems = this.renderLinksListItems.bind(this)
  }
  componentDidMount(){
    console.log("Component did mount")

    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('anything')
      const links_list = Links.find({
        visible:Session.get('showVisible')
      }).fetch()
      this.setState({links_list})

    })

  }
  componentWillUnmount(){
    this.linksTracker.stop();
  }
  renderLinksListItems(){
    if(this.state.links_list.length > 0){
      return this.state.links_list.map((link)=>{
        const shortUrl = Meteor.absoluteUrl(link._id)
        return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />
      })
    }else{
      return <div className="item"><p className="item__status-message">No links found</p></div>
    }
  }
  render(){
    return (<div>
        <p>Links List</p>
        <FlipMove maintainContainerHeight={true}>
        {this.renderLinksListItems()}
        </FlipMove>
      </div>)
  }


}
