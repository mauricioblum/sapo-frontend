import styled from 'styled-components';
import { Paper, FormControl, Button } from '@material-ui/core';

export const Container = styled.div`
  flex: 1;
  padding-bottom: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  padding: 0px 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Image = styled.img`
  width: 100%;
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
