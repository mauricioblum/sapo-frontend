import styled from 'styled-components';
import { Paper, Button, FormControl } from '@material-ui/core';

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  flex-grow: 1;
`;

export const Headline = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const OptionBox = styled(Paper)`
  width: 300px;
  height: auto;
  min-height: 200px;
  padding: 20px;
  margin-right: 35px;
  display: flex;
  justify-content: ${props =>
    props.centered ? 'space-evenly' : 'space-around'};
  align-items: center;
  flex-direction: column;
`;

export const OptionButton = styled(Button)``;

export const Control = styled(FormControl)`
  width: 100%;
`;
