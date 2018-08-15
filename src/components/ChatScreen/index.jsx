import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import RoomsList from '../RoomsList';
import { MessageInput } from '../MessageInput';
import Message from '../Message';

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
        console.log(this.refs);
        // this.refs[Object.keys(this.refs).length - 1].scrollIntoView({
        // block: 'end',
        // behavior: 'smooth',
        // });
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

  renderMessages = () =>
    this.state.mockMessages.map((message, index) => (
      <Message
        ref={index}
        key={message.id}
        user={message.user}
        time={message.time}
        message={message.text}
      />
    ));

  render() {
    return (
      <Container>
        <RoomsList />
        <Chat>
          {this.renderMessages()}
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
