import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 15%;
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
  }

  handleSubmit = () => {}

  render() {
    return (
      <Container>
        <Form>
          <Legend>Войти</Legend>
          <Input type="text" placeholder="Логин" />
          <Input type="password" placeholder="Пароль" />
          <Input type="email" placeholder="Email" />
          <SubmitButton onClick={this.handleSubmit} type="submit" value="Вход" />
        </Form>
      </Container>
    );
  }
}
