import React, {Component} from 'react'
//stylesheets
import '../../stylesheets/modules/default-layout'

export default class DefaultLayout extends Component {
  render(){
    return (
        <div className="wraper">
          <head>
            <title> layout title </title>
          </head>
          {this.props.children}
        </div>
    );
  }
}
