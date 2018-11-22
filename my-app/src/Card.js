import React from 'react';
import './Card.css';

const d__cardImg = { 
    width: '100%',
    display: 'inline-block',
    
}



class Card extends React.Component {
          
  render() {
    return (
        
        <div className="card">
            <img
                className="card-img-top"
                alt=""
                src={this.props.src}
                style={d__cardImg}
            />
              <div className="card-img-overlay">
            </div>
        </div>
      );
    }
  }




export default Card;
