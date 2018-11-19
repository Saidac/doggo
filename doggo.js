'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Cool! Heres some doogos!';
    }

    return e(
      'anchor',
      { onClick: () => this.setState({ liked: true }) },
      'Yes!'
    );
  }
}


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
