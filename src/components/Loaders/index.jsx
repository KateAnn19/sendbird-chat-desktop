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

const SearchUserLoaderStyled = styled.div`
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  left: 50%;
  &::before {
    content: '...';
    position: absolute;
    display: block;
  }
`;

export const SearchUserLoader = () => <SearchUserLoaderStyled />;
