import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setUser } from '../../redux/user/actions';

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

const Input = styled.input`
  margin-bottom: 5px;
  font-size: 0.8rem;
`;

const SubmitButton = styled.input`
  font-size: 1.2rem;
`;

class AuthorizationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    };

    this.userRef = React.createRef();
    this.passRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { userRef, passRef, emailRef } = this;
    if (!userRef.value) {
      console.log('too short name');
    } else if (passRef.value.length > 5 && emailRef.value.length > 5) {
      this.setState({
        username: userRef.value,
        password: passRef.value,
        email: emailRef.value
      });
    } else {
      console.log('too short password or mail');
    }
  };

  render() {
    return (
      <Container>
        <Form>
          <Legend>Войти</Legend>
          <Input type="text" placeholder="Логин" innerRef={node => this.userRef = node} />
          <Input type="password" placeholder="Пароль" innerRef={node => this.passRef = node} />
          <Input type="email" placeholder="Email" innerRef={node => this.emailRef = node} />
          <SubmitButton onClick={this.handleSubmit} type="submit" value="Вход" />
        </Form>
      </Container>
    );
  }
}

export default connect(null, { setUser })(AuthorizationForm);
