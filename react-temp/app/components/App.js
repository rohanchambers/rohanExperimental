import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.text}</button>
    );
  }
}

Button.defaultProps = { text: 'I am a button'}

ReactDOM.render(
  <input value="Hello!" />,
  document.getElementById('container')
);