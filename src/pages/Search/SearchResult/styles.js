import styled from 'styled-components';

import { Paper, Button, FormControl } from '@material-ui/core';

export const Container = styled.div`
  flex: 1;
`;

export const Headline = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const FormBox = styled(Paper)`
  width: 600px;
  height: auto;
  min-height: 300px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Control = styled(FormControl)`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const TextWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 20px 0px;
`;

export const ButtonOption = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
})`
  margin-top: 15px !important;
`;
