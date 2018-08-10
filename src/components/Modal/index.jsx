import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { createChannel } from '../../redux/channels/actions';
import { RoomsLoader } from '../Loaders';

const Overlay = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 5;
  margin: -8px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
  position: fixed;
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
  margin-bottom: 50px;
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
  margin-right: 10px;
  width: 25%;
  display: inline-block;
`;

const InputContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

const RoomTypeSelect = styled.select`
  width: 30%;
`;

const RoomTextInput = styled.input`
  width: 30%;
`;

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      roomType: 'group',
      roomName: '',
      coverUrl: '',
      userTwoId: '',
    };
  }

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { callback, userOneId, loading } = this.props;
    const {
      roomType, roomName, coverUrl, userTwoId
    } = this.state;

    if (this.validateParams()) {
      this.props.createChannel({
        roomType,
        roomName,
        coverUrl,
        userOneId,
        userTwoId,
      });
    } else {
      console.log('wrong params');
    }
  };

  handleCancel = (e) => {
    e.preventDefault();
    const { callback } = this.props;
    callback();
  };

  validateParams = () => {
    const { roomType, roomName, userTwoId } = this.state;
    if (roomType === 'open' && roomName.length > 5) {
      return true;
    }
    if (roomType === 'group' && userTwoId.length > 5 && roomName.length > 5) {
      return true;
    }
    return false;
  };

  render() {
    const { show, loading } = this.props;
    const data = loading ? (
      <Overlay show={show}>
        <Container>
          <RoomsLoader />
        </Container>
      </Overlay>
    ) : (
      <Overlay show={show}>
        <Container>
          <Header>Новая комната</Header>
          <Text>Укажите параметры:</Text>
          <InputContainer>
            <Label htmlFor="roomType">Тип</Label>
            <RoomTypeSelect
              id="roomType"
              name="roomType"
              onChange={this.onHandleChange}
            >
              <option value="group">Закрытая</option>
              <option value="open">Публичная</option>
            </RoomTypeSelect>
          </InputContainer>
          {this.state.roomType === 'group' && (
            <InputContainer>
              <Label htmlFor="userTwoId">ID пользователя</Label>
              <RoomTextInput
                id="userTwoId"
                name="userTwoId"
                type="text"
                onChange={this.onHandleChange}
              />
            </InputContainer>
          )}
          <InputContainer>
            <Label htmlFor="roomName">Название</Label>
            <RoomTextInput
              id="roomName"
              name="roomName"
              type="text"
              onChange={this.onHandleChange}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="coverUrl">Обложка (URL)</Label>
            <RoomTextInput
              id="coverUrl"
              name="coverUrl"
              type="text"
              placeholder="необязательно"
              onChange={this.onHandleChange}
            />
          </InputContainer>
          <ButtonsContainer>
            <Button onClick={this.handleSubmit}>Создать</Button>
            <Button onClick={this.handleCancel}>Готово</Button>
          </ButtonsContainer>
        </Container>
      </Overlay>
    );

    return data;
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
  createChannel: PropTypes.func.isRequired,
  userOneId: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(
  ({ user }) => ({
    userOneId: user.user.sbUserId,
    loading: user.loading,
  }),
  { createChannel }
)(Modal);
