import styled from 'styled-components';

import { Paper, Button, FormControl, RadioGroup } from '@material-ui/core';

export const Container = styled.div`
  flex: 1;
  padding-bottom: 40px;
`;

export const TypeGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row !important;
  flex-wrap: wrap;
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
  width: 800px;
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
  margin-top: 10px !important;
  margin-bottom: 10px !important;
`;

export const SubmitButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
})`
  margin-top: 15px !important;
`;

export const ColorOption = styled.span`
  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-left: 5px;
    margin-right: 10px;
    border: 1px solid lightgray;
  }
`;
