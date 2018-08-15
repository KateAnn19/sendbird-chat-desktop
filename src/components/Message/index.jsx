import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  margin: 20px;
  background-color: cyan;
  border-radius: 15px;
  position: relative;
`;

const User = styled.h3`
  margin-top: 15px;
  margin-bottom: 10px;
  text-align: center;
`;

const Time = styled.span`
  position: absolute;
  top: 3px;
  right: 50%;
  font-size: 12px;
  transform: translateX(50%);
`;

const MessageText = styled.p`
  padding: 10px;
`;

export const Message = () => (
  <Container>
    <User>user</User>
    <Time>time</Time>
    <MessageText>message</MessageText>
  </Container>
);
