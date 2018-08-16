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
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Messages = styled.ul`
  list-style: none;
  padding-left: 0;
`;

class ChatScreen extends Component {
  state = {
    currentMessage: '',
  };

  sendMessageCallback = () => {
    this.props.sendMessage(this.state.currentMessage);
    // this.setState(
    // {
    // currentMessage: '',
    // mockMessages: [
    // ...this.state.mockMessages,
    // {
    // id: `${this.state.mockMessages.length + 1}`,
    // user: `tim${this.state.mockMessages.length + 1}`,
    // time: '3333',
    // text: this.state.currentMessage,
    // },
    // ],
    // },
    // () => {
    // console.log(this.state);
    // }
    // );
    // this.setState({
    // currentMessage: '',
    // mockMessages: [...this.state.mockMessages],
    // });
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

export default connect(
  ({ channels, chat }) => ({
    currentChannel: channels.currentChannel,
    messages: chat.messages,
  }),
  { sendMessage }
)(ChatScreen);
