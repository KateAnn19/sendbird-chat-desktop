import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import { sendMessage, startTyping, endTyping } from '../../redux/chat/actions';
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
  position: relative;
`;

const Chat = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TypingBar = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  bottom: 10px;
  left: 35%;
  color: green;
`;

const TypingBarItem = styled.li`
  font-size: 15px;
  font-style: italic;
`;

class ChatScreen extends Component {
  state = {
    currentMessage: '',
  };

  timer = null;

  sendMessageCallback = () => {
    this.props.sendMessage(this.state.currentMessage);
  };

  handleInputCallback = (e) => {
    this.setState({ currentMessage: e.target.value }, () => {
      if (!this.timer) {
        this.props.startTyping(this.props.currentChannel);
      }
      // console.log(this.state.currentMessage);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.props.endTyping(this.props.currentChannel);
        this.timer = null;
      }, 1000);
    });
  };

  renderTypingBar = () => {
    if (this.props.typers) {
      return (
        <TypingBar>
          {this.props.typers.map(typer => (
            <TypingBarItem key={typer.lastSeenAt}>
              {`${typer.nickname} печатает...`}
            </TypingBarItem>
          ))}
        </TypingBar>
      );
    }
    return null;
  };

  render() {
    return (
      <Container>
        <RoomsList />
        <Chat>
          {this.props.currentChannel && (
            <Fragment>
              {this.renderTypingBar()}
              <MessagesList messages={this.props.messages} />
              <MessageInput
                value={this.state.currentMessage}
                handleInputCallback={this.handleInputCallback}
                sendMessageCallback={this.sendMessageCallback}
              />
            </Fragment>
          )}
        </Chat>
      </Container>
    );
  }
}

ChatScreen.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  sendMessage: PropTypes.func.isRequired,
  currentChannel: PropTypes.shape({}),
  startTyping: PropTypes.func.isRequired,
  endTyping: PropTypes.func.isRequired,
  typers: PropTypes.arrayOf(PropTypes.shape({})),
};

export default connect(
  ({ channels, chat }) => ({
    currentChannel: channels.currentChannel,
    messages: chat.messages,
    typers: chat.typers,
  }),
  { sendMessage, startTyping, endTyping }
)(ChatScreen);
