import React, { Component } from 'react';

class Button extends React.Component {
  render() {
    return <button type="submit" className={this.props.className}> {this.props.label} </button>
  }
}


export default Button;
