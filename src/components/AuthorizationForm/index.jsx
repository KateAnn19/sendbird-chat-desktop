import React, { Component } from 'react';

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
      <form className="form" action="#">
        <legend>Войти</legend>
        <input className="form__item" type="text" placeholder="Логин" />
        <input className="form__item" type="password" placeholder="Пароль" />
        <input className="form__item" type="email" placeholder="Email" />
        <input onClick={this.handleSubmit} type="submit" value="Вход" />
      </form>
    );
  }
}
