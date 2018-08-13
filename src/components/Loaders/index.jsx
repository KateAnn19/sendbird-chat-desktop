import React from 'react';
import styled from 'styled-components';

const AuthLoaderStyled = styled.h1`
  vertical-align: middle;
  text-align: center;
`;

export const AuthLoader = () => (
  <AuthLoaderStyled>Загрузка...</AuthLoaderStyled>
);

const RoomsLoaderStyled = styled.h2`
  vertical-align: middle;
  text-align: center;
`;

export const RoomsLoader = () => (
  <RoomsLoaderStyled>Обновление комнат...</RoomsLoaderStyled>
);

const SearchUserLoaderStyled = styled.h3`
  vertical-align: middle;
  text-align: center;
  font-size: 12px;
  margin: 0;
`;

export const SearchUserLoader = () => (
  <SearchUserLoaderStyled>Поиск пользователей...</SearchUserLoaderStyled>
);
