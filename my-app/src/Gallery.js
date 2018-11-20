import React from 'react';
import Card from './Card';

class Gallery extends React.Component {
  render() {
    return  <div className="card-columns">
                <h1>{this.props.text}</h1>
                <div className="card"> 
                <Card/>
                
                </div>
            </div>
  }
}

export default Gallery;


