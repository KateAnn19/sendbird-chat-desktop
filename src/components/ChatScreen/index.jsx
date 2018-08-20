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

const TypingBar = styled.h4`
  position: absolute;
  bottom: 10px;
  left: 35%;
  color: green;
`;

class ChatScreen extends Component {
  state = {
    currentMessage: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.currentMessage.length > 0 &&
      prevState.currentMessage.length === 0
    ) {
      this.props.startTyping(this.props.currentChannel);
    } else if (
      this.state.currentMessage.length === 0 &&
      prevState.currentMessage.length > 0
    ) {
      this.props.endTyping(this.props.currentChannel);
    }
  }

  sendMessageCallback = () => {
    this.props.sendMessage(this.state.currentMessage);
    this.props.endTyping(this.props.currentChannel);
  };

  handleInputCallback = (e) => {
    this.setState({ currentMessage: e.target.value }, () => {
      console.log(this.state.currentMessage);
    });
  };

  renderTypingBar = () => {
    const data = this.props.typing ? <TypingBar>печатает...</TypingBar> : null;
    return data;
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
  typing: PropTypes.bool.isRequired,
};

export default connect(
  ({ channels, chat }) => ({
    currentChannel: channels.currentChannel,
    messages: chat.messages,
    typing: chat.typing,
  }),
  { sendMessage, startTyping, endTyping }
)(ChatScreen);
