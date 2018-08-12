import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
  width: 103%;
  background-color: white;
`;

const ListItem = styled.li`
  border: 1px solid grey;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
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
    options: [
      { id: 1, value: 1, name: 'tim2' },
      { id: 2, value: 2, name: 'tim3' },
      { id: 3, value: 3, name: 'tim4' },
    ],

    isOpen: false,
    query: '',
  };

  getOptions() {
    //  some logic for receiveing options
  }

  handleFocus = (e) => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  handleClear = (e) => {
    e.preventDefault();
    this.setState({ query: '' });
  };

  handleBlur = (e) => {
    e.preventDefault();
    this.setState({ isOpen: false });
  };

  renderOptions = () => {
    const { options, query } = this.state;
    return options
      .filter(option => option.name.startsWith(query))
      .map(option => <ListItem key={option.id}>{option.name}</ListItem>);
  };

  render() {
    const { id } = this.props;
    const { isOpen, query } = this.state;
    return (
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
  }
}

export default connect()(Combobox);
