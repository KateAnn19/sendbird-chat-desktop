import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { findUsers, unsetUsers } from '../../redux/search/actions';
import { SearchUserLoader } from '../Loaders';

const Container = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 30%;
`;

const InputField = styled.input`
  padding: 0;
  height: 15px;
  width: 100%;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 102%;
  background-color: white;
`;

const ListItem = styled.li`
  width: 100%;
  border: 1px solid grey;
  background-color: white;
  &:hover {
    background-color: green;
    color: white;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0;
  height: 14px;
  line-height: 0;
  top: 2px;
  padding: 3px;
  background-color: #8eb2ed;
  border-radius: 50%;
  opacity: 0.8;
  color: grey;
  z-index: 10;
  &:hover {
    opacity: 1;
    color: white;
  }
`;

class Combobox extends Component {
  state = {
    isOpen: false,
    query: '',
  };

  handleFocus = (e) => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  handleChange = (e) => {
    const { query } = this.state;
    const { value } = e.target;
    const { findUsers } = this.props;
    this.setState({ query: value });
    findUsers(query);
  };

  handleChoose = (e) => {
    e.preventDefault();
    this.setState({
      query: e.target.textContent,
      isOpen: false,
    });
  };

  handleClear = (e) => {
    const { unsetUsers } = this.props;
    e.preventDefault();
    this.setState({ query: '' });
    unsetUsers();
  };

  handleBlur = (e) => {
    e.preventDefault();
    this.setState({ isOpen: false });
  };

  renderOptions = () => {
    const { options, successful } = this.props;
    const { query } = this.state;
    if (successful) {
      return options
        .filter(option => option.username.startsWith(query))
        .map(option => (
          <ListItem key={option._id} onClick={this.handleChoose}>
            {option.username}
          </ListItem>
        ));
    }
    return null;
  };

  render() {
    const { id, searching } = this.props;
    const { isOpen, query } = this.state;

    const data = searching ? (
      <Container>
        <SearchUserLoader />
      </Container>
    ) : (
      <Container>
        <InputField
          id={id}
          value={query}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        <ClearButton onClick={this.handleClear}>x</ClearButton>
        <List id="mySelect">{isOpen && this.renderOptions()}</List>
      </Container>
    );
    return data;
  }
}

Combobox.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  searching: PropTypes.bool.isRequired,
  findUsers: PropTypes.func.isRequired,
  unsetUsers: PropTypes.func.isRequired,
  successful: PropTypes.bool.isRequired,
};

export default connect(
  ({ search }) => ({
    options: search.users,
    searching: search.searching,
    successful: search.successful,
  }),
  { findUsers, unsetUsers }
)(Combobox);
