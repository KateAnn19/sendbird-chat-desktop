import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
`;

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
      // node.scrollIntoView();
    }
  };

  render() {
    return (
      <Container>
        {this.props.messages.map((message, index) => (
          <Message
            innerRef={this.scrollToMessage(index)}
            key={message.messageId}
            user={message._sender.nickname}
            time={message.createdAt}
            message={message.message}
          />
        ))}
      </Container>
    );
  }
}

export default MessagesList;
