import React from 'react';
import {Session} from 'meteor/session'

export default class LinksListFilters extends React.Component{
  constructor(props){
    super(props)
    this.state =  {
      visible: false
    }

  }

  componentDidMount(){
    this.tracker = Tracker.autorun(()=>{
      this.setState({
        visible: Session.get('showVisible')
      })

    })
  }

  onChange(e){


    Session.set('showVisible',!e.target.checked)



  }
  componentWillUnmount(){
    this.tracker.stop()
  }
  render(){
    return (
      <div><label className="checkbox">
        <input className="checkbox__box" type="checkbox" onChange={this.onChange.bind(this)} checked={!this.state.visible}/>show hidden links
      </label></div>
    );
  }

}
