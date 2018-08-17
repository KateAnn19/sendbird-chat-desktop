import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import { sendMessage } from '../../redux/chat/actions';
import RoomsList from '../RoomsList';
import MessageInput from '../MessageInput';
import MessagesList from '../MessagesList';

injectGlobal`
  body {
    margin: 0
  }
`;

const Container = styled.div`
  display: flex;
`;

const Chat = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

class ChatScreen extends Component {
  state = {
    currentMessage: '',
  };

  sendMessageCallback = () => {
    this.props.sendMessage(this.state.currentMessage);
  };

  handleInputCallback = (e) => {
    this.setState(
      {
        currentMessage: e.target.value,
      },
      () => console.log(this.state.currentMessage)
    );
  };

  render() {
    return (
      <Container>
        <RoomsList />
        <Chat>
          <MessagesList messages={this.props.messages} />
          <MessageInput
            value={this.state.currentMessage}
            handleInputCallback={this.handleInputCallback}
            sendMessageCallback={this.sendMessageCallback}
          />
        </Chat>
      </Container>
    );
  }
}

ChatScreen.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default connect(
  ({ channels, chat }) => ({
    currentChannel: channels.currentChannel,
    messages: chat.messages,
  }),
  { sendMessage }
)(ChatScreen);
