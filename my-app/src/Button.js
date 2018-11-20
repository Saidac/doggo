import React from 'react';

class Button extends React.Component {
  render() {
    return <button 
    type={this.props.type} 
    className={this.props.className}> {this.props.text} </button>
  }
}

export default Button;
