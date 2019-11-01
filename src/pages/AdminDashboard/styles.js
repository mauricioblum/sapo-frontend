import React from 'react';
import styled from 'styled-components';
import { Paper, FormControl, Button } from '@material-ui/core';
import Autorenew from '@material-ui/icons/Autorenew';

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  padding: 0px 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px !important;
`;

export const SimpleButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
  startIcon: <Autorenew />,
})``;

export const LoginBox = styled(Paper)`
  width: 350px;
  height: auto;
  padding: 40px 20px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const Control = styled(FormControl)`
  width: 100%;
`;

export const LoginButton = styled(Button)`
  margin-top: 20px !important;
`;
