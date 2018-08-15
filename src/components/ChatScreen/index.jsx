import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import RoomsList from '../RoomsList';
import { MessageInput } from '../MessageInput';
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

const Messages = styled.ul`
  list-style: none;
  padding-left: 0;
`;

class ChatScreen extends Component {
  state = {
    mockMessages: [
      {
        id: '1',
        user: 'tim1',
        time: '12-34',
        text: 'hello from tim1',
      },
      {
        id: '2',
        user: 'tim2',
        time: '12-34',
        text: 'hello from tim2',
      },
      {
        id: '3',
        user: 'tim3',
        time: '12-34',
        text: 'hello from tim3',
      },
      {
        id: '4',
        user: 'tim4',
        time: '12-34',
        text: 'hello from tim4',
      },
      {
        id: '5',
        user: 'tim5',
        time: '12-34',
        text: 'hello from tim5',
      },
    ],
    currentMessage: '',
  };

  sendMessageCallback = () => {
    this.setState(
      {
        currentMessage: '',
        mockMessages: [
          ...this.state.mockMessages,
          {
            id: `${this.state.mockMessages.length + 1}`,
            user: `tim${this.state.mockMessages.length + 1}`,
            time: '3333',
            text: this.state.currentMessage,
          },
        ],
      },
      () => {
        console.log(this.state);
      }
    );
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
          <MessagesList messages={this.state.mockMessages} />
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

export default connect()(ChatScreen);
