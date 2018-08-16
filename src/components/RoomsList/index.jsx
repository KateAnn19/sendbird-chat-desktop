import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../Modal';

import { RoomsLoader } from '../Loaders';
import { enterChannel } from '../../redux/channels/actions';

const Container = styled.div`
  width: 30%;
  max-height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Header = styled.h3`
  text-align: center;
  padding-top: 20px;
  margin: 0 0 20px;
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
  height: 50px;
  padding: 10px 20px;
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

  getRoomUrl = (rooms, roomToFindName) =>
    rooms.find(room => room.name === roomToFindName).url;

  handleEnterRoom = ({ target }) => {
    const roomName = target.textContent;
    const { rooms } = this.props;
    this.props.enterChannel(this.getRoomUrl(rooms, roomName));
  };

  handleOpenModal = () => {
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
        <RoomButton onClick={this.handleEnterRoom}>{room.name}</RoomButton>
      </RoomsItem>
    ));

  render() {
    const { rooms, loading } = this.props;
    const { showModal } = this.state;
    const data = loading ? (
      <Container>
        <Link to="/auth/logout">Выйти из учетной записи</Link>
        <Header>Доступные комнаты</Header>
        <RoomsLoader />
      </Container>
    ) : (
      <Container>
        <Link to="/auth/logout">Выйти из учетной записи</Link>
        <Header>Доступные комнаты</Header>
        <CreateRoomButton onClick={this.handleOpenModal}>
          Создать комнату
        </CreateRoomButton>
        <Rooms>{this.renderRooms(rooms)}</Rooms>
        <Modal show={showModal} callback={this.handleModalClose} />
      </Container>
    );

    return data;
  }
}

RoomsList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(
  ({ channels }) => ({
    rooms: channels.channels,
    loading: channels.loading,
  }),
  { enterChannel }
)(RoomsList);
