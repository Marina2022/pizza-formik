import styled from 'styled-components';

export const StyledLabel = styled.label`
  margin-left: 15px;  
`

export const CheckInput = styled.input`
  display: none;
  
  & + label {
    position: relative;    
  }

  & + label::after {
    content: '';
    left: -28px;
    top: 5px;
    width: 15px;
    height: 15px;    
    position: absolute;
    background: #fe5f1e;
    border-radius: 4px;
  }

  &:checked + label::after {
    content: '';
    left: -28px;
    width: 15px;
    height: 15px;
    position: absolute;
    background: green;
  }
  
`
