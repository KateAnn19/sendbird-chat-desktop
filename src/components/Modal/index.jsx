import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Overlay = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  position: absolute;
  z-index: 5;
  margin: -8px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
  position: absolute;
  z-index: 10p;
  width: 40%;
  height: 50%;
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

const Header = styled.h2`
  width: 50%;
  margin: 20px auto 0;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 50px;
`;

const Button = styled.button`
  width: 10rem;
  border-radius: 5px;
  padding: 5px 20px;
  margin-bottom: 5px;
`;

const Label = styled.label`
  color: red;
`;

const RoomType = styled.select`
  width: 50%;
`;

const RoomNameInput = styled.input`
  width: 50%;
`;

export class Modal extends Component {
  constructor() {
    super();
    this.state = {
      roomType: '',
      roomName: '',
      coverURL: '',
    };
  }

  render() {
    return (
      <Overlay show={this.props.show}>
        <Container>
          <Header>Новая комната</Header>
          <Text>Укажите параметры:</Text>
          <RoomType name="roomType">
            <option value="private">Приватная</option>
            <option value="public">Публичная</option>
          </RoomType>
          <RoomNameInput type="text" placeholder="Имя комнаты" />
          <ButtonsContainer>
            <Button>Создать</Button>
          </ButtonsContainer>
        </Container>
      </Overlay>
    );
  }
}

Modal.propTypes = { show: PropTypes.bool.isRequired };
