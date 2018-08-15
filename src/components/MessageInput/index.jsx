import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  margin: auto 10px 20px;
  position: fixed;
  bottom: 20px;
  right: 100px;
  display: flex;
`;

const Input = styled.input`
  width: 80%;
  padding: 5px;
  margin-right: 5px;
`;

const SendButton = styled.button`
  width: 20%;
  padding: 5px;
  border: 1px solid black;
  &:hover {
    background-color: green;
    color: white;
  }
`;

const MessageInput = ({ value, handleInputCallback, sendMessageCallback }) => {
  const handlePressKey = (e) => {
    e.key === 'Enter' ? sendMessageCallback() : null;
  };
  return (
    <Container>
      <Input
        value={value}
        onChange={handleInputCallback}
        onKeyPress={handlePressKey}
      />
      <SendButton onClick={sendMessageCallback}>Отправить</SendButton>
    </Container>
  );
};

MessageInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputCallback: PropTypes.func.isRequired,
  sendMessageCallback: PropTypes.func.isRequired,
};

export default MessageInput;
