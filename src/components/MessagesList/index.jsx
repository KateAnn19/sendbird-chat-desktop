import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

class MessagesList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.messages === this.props.messages) {
      return false;
    }
    return true;
  }

  scrollToMessage = index => (node) => {
    if (index === this.props.messages.length - 1) {
      node.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    console.log('rendering messages');
    return this.props.messages.map((message, index) => (
      <Message
        innerRef={this.scrollToMessage(index)}
        key={message.id}
        user={message.user}
        time={message.time}
        message={message.text}
      />
    ));
  }
}

export default MessagesList;
