import {Field} from 'formik'

import styled from 'styled-components'


export const BetterLabel = styled.label`
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
`

export const StyledTitle = styled.h2`
  margin-bottom: 20px;`

export const BetterInput = styled(Field)`
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const FormControl = styled.div`
  margin-bottom: 20px;`

export const BetterButton = styled.button`
  display: block;
  padding: 10px 50px;
  justify-content: center;
  align-items: center;
  color: #555;
  background: #ffdf8c;
  font-size: 18px;
  border-radius: 10px;

  &:hover {
    background: #ffdf51;
  }

  &:active {
    background: #ffdf41;
    box-shadow: 3px 3px 3px #b6b6b6;
  }
`

export const BestError = styled.div`color: #fe5f1e;
  font-weight: bold;
  font-size: 20px`

