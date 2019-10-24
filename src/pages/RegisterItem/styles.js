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
  justify-content: ${props =>
    props.centered ? 'space-evenly' : 'space-around'};
  align-items: center;
  flex-direction: column;
`;

export const Control = styled(FormControl)`
  width: 100%;
`;

export const SubmitButton = styled(Button)``;
