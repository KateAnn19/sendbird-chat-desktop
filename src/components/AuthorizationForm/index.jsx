import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 15%;
  right: 50%;
  bottom: 50%;
  transform: translateX(50%) translateY(50%);
`;

const Legend = styled.legend`
  font-size: 1.3rem;
  text-align: center;
`;

const Input = styled.input.attrs({
  type: props => props.type,
  placeholder: props => props.placeholder
})`
  margin-bottom: 5px;
  font-size: 0.8rem;
`;

const SubmitButton = styled.input.attrs({
  type: 'submit',
  value: props => props.value
})`
  font-size: 1.2rem;
`;


export class AuthorizationForm extends Component {
  constructor() {
    super();

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

  }

  render() {
    return (
      <Form>
        <Legend>Войти</Legend>
        <Input type="text" placeholder="Логин" />
        <Input type="password" placeholder="Пароль" />
        <Input type="email" placeholder="Email" />
        <SubmitButton onClick={this.handleSubmit} type="submit" value="Вход" />
      </Form>
    );
  }
}
