import styled from 'styled-components';
import { Paper, FormControl, Button } from '@material-ui/core';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

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
