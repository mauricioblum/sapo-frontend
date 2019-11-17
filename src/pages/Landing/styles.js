import styled from 'styled-components';
import { Paper, FormControl, Button, Typography } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(#215b14, #215b14);
  padding: 0px 10px;
`;

export const Branding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
  padding-bottom: 50px;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  margin-top: 1rem;
`;

export const Box = styled(Paper)`
  width: 400px;
  height: 200px;
`;

export const CountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 25px;
`;

export const Count = styled(Typography).attrs({
  variant: 'h1',
  color: 'primary',
})`
  text-align: center;
  font-size: 8rem !important;
`;

export const CountTitle = styled(Typography).attrs({
  variant: 'h6',
  color: 'primary',
})`
  text-align: center;
`;

export const CountSubTitle = styled(Typography).attrs({
  variant: 'h6',
  color: 'primary',
})`
  text-align: center;
`;

export const EnterButton = styled(Button).attrs({
  variant: 'contained',
  color: 'secondary',
  size: 'large',
})`
  margin-top: 45px !important;
  margin-bottom: 45px !important;
`;
