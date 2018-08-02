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
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      email: ''
    };

    this.loginRef = React.createRef();
    this.passRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(`${this.loginRef.value} ${this.passRef.value} ${this.emailRef.value}`);
    if (!this.loginRef.value) {
      console.log('too short name');
      return;
    }
    if (this.passRef.value.length > 5 && this.emailRef.value.length > 5) {
      console.log('success');
      return;
    } else {
      console.log('too short password or mail');
      return;
    }
  };

  render() {
    return (
      <Container>
        <Form>
          <Legend>Войти</Legend>
          <Input type="text" placeholder="Логин" innerRef={node => this.loginRef = node} />
          <Input type="password" placeholder="Пароль" innerRef={node => this.passRef = node} />
          <Input type="email" placeholder="Email" innerRef={node => this.emailRef = node} />
          <SubmitButton onClick={this.handleSubmit} type="submit" value="Вход" />
        </Form>
      </Container>
    );
  }
}
