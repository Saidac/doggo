import React from 'react';

const cardImgStyle = {
    height: 'auto',
    width: '100%',
    display: 'block'
  };

class Card extends React.Component {
  render() {
    return (
        <img
          className="card-img-top"
          alt=""
          src={this.props.src}
          style={cardImgStyle}
        />
      );
    }
  }




export default Card;
