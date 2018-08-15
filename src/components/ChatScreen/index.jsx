import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import RoomsList from '../RoomsList';
import { MessageInput } from '../MessageInput';
import { Message } from '../Message';

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
  position: relative;
  overflow: scroll;
`;

class ChatScreen extends Component {
  render() {
    return (
      <Container>
        <RoomsList />
        <Chat>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <MessageInput />
        </Chat>
      </Container>
    );
  }
}

export default connect()(ChatScreen);
