import FormikControl from '../FormikControl/FormikControl';
import styled from 'styled-components';
import {BetterButton} from '../styletsx';

export const StyledInpFormikControl = styled(FormikControl)`
  label {
    font-weight: bold;
    margin-bottom: 5px;
    display: inline-block;
  }  
`

export const RadioFormikControl = styled(FormikControl)`
  display: flex;
  label {
    margin-right: 30px;
  }
`
export const StyledBetterButton = styled(BetterButton)`
margin-top: 40px;
`
