import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 30%;
  height: 100vh;
  margin: -8px;
  background-color: rgba(0, 0, 0, 0.1);
  border-right: 1px solid black;
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

class RoomsList extends Component {
  renderRooms = rooms => (
    <Rooms>
      {rooms.map(room => (
        <RoomsItem>
          <RoomButton>room.name</RoomButton>
        </RoomsItem>
      ))}
    </Rooms>
  );

  render() {
    return (
      <Container>
        <Header>Available Rooms</Header>
        {this.renderRooms(this.props.rooms)}
      </Container>
    );
  }
}

RoomsList.propTypes = { rooms: PropTypes.object.isRequired };

export default connect(({ channels }) => ({
  rooms: channels,
}))(RoomsList);
