import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import RoomsList from '../RoomsList';

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
  background-color: red;
`;

class ChatScreen extends Component {
  render() {
    return (
      <Container>
        <RoomsList />
        <Chat>
          <p>hello</p>
        </Chat>
      </Container>
    );
  }
}

export default connect()(ChatScreen);
