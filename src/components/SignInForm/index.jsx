import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { fetchUser } from '../../redux/user/actions';
import { Loader } from '../Loader';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
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

const Link = styled(NavLink)`
  color: blue;
  margin-bottom: 20px;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = this.state;
    if (!username) {
      console.log('too short name');
    } else if (password.length > 5 && email.length > 5) {
      this.props.fetchUser({ username, password, email });
    } else {
      console.log('too short password or mail');
    }
  };

  render() {
    const { loading } = this.props;
    console.log(loading);
    const data = loading ? (
      <Loader />
    ) : (
      <Container>
        <Link to="/auth/signup">Новый пользователь?</Link>
        <Form>
          <Legend>Войти</Legend>
          <Input
            type="text"
            name="username"
            placeholder="Логин"
            onChange={this.onHandleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={this.onHandleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.onHandleChange}
          />
          <SubmitButton
            onClick={this.handleSubmit}
            type="submit"
            value="Вход"
          />
        </Form>
      </Container>
    );
    return data;
  }
}

SignInForm.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(
  ({ user }) => ({ loading: user.loading }),
  { fetchUser }
)(SignInForm);
