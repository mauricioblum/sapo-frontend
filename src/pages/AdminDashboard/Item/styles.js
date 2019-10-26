import styled from 'styled-components';
import { Paper, FormControl, Button } from '@material-ui/core';

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  padding: 0px 20px;
  height: 100vh;
  align-items: center;
`;

export const ItemBox = styled(Paper)`
  width: 350px;
  height: auto;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const CustomButton = styled(Button)`
  margin-top: 20px !important;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TextWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 20px 0px;
`;

export const ButtonOption = styled(Button).attrs({
  variant: 'contained',
  color: props => (props.color === 'danger' ? 'secondary' : 'primary'),
})`
  margin-top: 15px !important;
`;
