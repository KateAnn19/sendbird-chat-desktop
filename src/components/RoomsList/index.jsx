import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width: 30%;
  min-height: 100vh;
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
  margin: 30px auto;
  text-align: center;
  width: 50%;
  height: 30px;
`;

const Link = styled(NavLink)`
  color: blue;
  text-decoration: none;
  margin-left: 10px;
  margin-top: 10px;
  &:hover {
    color: red;
  }
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
      <RoomsItem key={room.url}>
        <RoomButton>{room.name}</RoomButton>
      </RoomsItem>
    ));

  render() {
    const { rooms } = this.props;
    const { showModal } = this.state;
    return (
      <Container>
        <Link to="/auth/logout">Выйти из учетной записи</Link>
        <Header>Доступные комнаты</Header>
        <Rooms>{this.renderRooms(rooms)}</Rooms>
        <Modal show={showModal} callback={this.handleModalClose} />
        <CreateRoomButton onClick={this.handleClick}>
          Создать комнату
        </CreateRoomButton>
      </Container>
    );
  }
}

RoomsList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(({ channels }) => ({
  rooms: channels.channels,
}))(RoomsList);
