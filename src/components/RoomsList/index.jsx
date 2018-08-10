import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Loader } from '../Loader';
import Modal from '../Modal';

const Container = styled.div`
  width: 30%;
  height: 100vh;
  margin: -8px;
  background-color: rgba(0, 0, 0, 0.1);
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h3`
  text-align: center;
  padding-top: 20px;
  margin: 0 0 50px;
`;

const Rooms = styled.ul`
  margin: 0;
  list-style: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const RoomsItem = styled.li`
  margin-bottom: 10px;
`;

const RoomButton = styled.button`
  height: 30px;
  width: 100%;
`;

const CreateRoomButton = styled.button`
  margin: 30px auto 0;
  text-align: center;
  width: 50%;
  height: 30px;
`;

class RoomsList extends Component {
  state = {
    showModal: false,
  };

  handleClick = () => {
    this.setState({
      showModal: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      showModal: false,
    });
  };

  renderRooms = rooms =>
    rooms.map(room => (
      <RoomsItem key={room.createdAt}>
        <RoomButton>{room.name}</RoomButton>
      </RoomsItem>
    ));

  render() {
    const { rooms, loading } = this.props;
    const { showModal } = this.state;
    const data = loading ? (
      <Loader />
    ) : (
      <Container>
        <Header>Доступные комнаты</Header>
        <Rooms>{this.renderRooms(rooms)}</Rooms>
        <CreateRoomButton onClick={this.handleClick}>
          Создать комнату
        </CreateRoomButton>
        <Modal show={showModal} callback={this.handleModalClose} />
      </Container>
    );

    return data;
  }
}

RoomsList.propTypes = { rooms: PropTypes.arrayOf(PropTypes.object).isRequired };

export default connect(({ channels, user }) => ({
  rooms: channels.channels,
  loading: user.loading,
}))(RoomsList);
