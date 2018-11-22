import React from 'react';
// import PropTypes from 'prop-types';

const cardImgStyle = {
    height: 'auto',
    width: '100%',
    display: 'block'
  };

class Card extends React.Component {
  render() {
    return <img className="card-img-top" alt="" src={this.props.src} style={cardImgStyle}/>
  }
}
/*
Card.propTypes = {
    items: PropTypes.array.isRequired
}
*/
export default Card;

/*
<div className="card">
<img className="card-img-top" alt="" src="https://images.dog.ceo/breeds/boxer/n02108089_1.jpg" style={cardImgStyle}></img>
</div>
*/