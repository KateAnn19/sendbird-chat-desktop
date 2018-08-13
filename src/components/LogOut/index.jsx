import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  z-index: 5;
  margin: -8px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 40%;
  height: 30%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 1px solid black;
  border-radius: 25px;
  background-color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 10rem;
  border-radius: 5px;
  padding: 5px 20px;
  margin-bottom: 5px;
  width: 100%;
  &:first-child {
    background-color: #f4426b;
    margin-bottom: 10px;
  }
  &:hover {
    border: 1px solid black;
    margin: -1;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Header = styled.h1`
  text-align: center;
  margin: 20px;
`;

class LogOut extends Component {
  handleLogOut = () => {};

  handleCalcel = () => {
    const { history } = this.props;
    return history.goBack();
  };

  render() {
    return (
      <Overlay>
        <Container>
          <Header>Выйти из учетной записи</Header>
          <ButtonContainer>
            <Button>Выход</Button>
            <Button onClick={this.handleCalcel}>Отмена</Button>
          </ButtonContainer>
        </Container>
      </Overlay>
    );
  }
}

LogOut.propTypes = { history: PropTypes.shape({}).isRequired };

export default withRouter(LogOut);
