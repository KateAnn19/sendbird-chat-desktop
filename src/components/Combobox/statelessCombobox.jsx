import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    cursor: pointer;
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

const statelessCombobox = ({
  options,
  searching,
  inputChangeCallback,
  choosePositionCallback,
}) => (
  <Container>
    <InputField
      id={id}
      onBlur={this.handleBlur}
      onChange={inputChangeCallback}
    />
    {searching && <SearchUserLoader />}
    <ClearButton onClick={this.handleClear}>x</ClearButton>
    <List id="mySelect">{options}</List>
  </Container>
);
