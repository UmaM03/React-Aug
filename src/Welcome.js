import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>welcome to todays session {this.props.name} who  loves to do  { this.props.hobby } </h1>
      </div>
    )
  }
}

export default Welcome

