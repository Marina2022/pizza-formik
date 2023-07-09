import {createGlobalStyle} from 'styled-components';

export const DatePickerWrapperStyles = createGlobalStyle`

  .date_picker {
    color: red;
    height: 40px;

    input {
      height: 35px;
      margin-top: 10px;
      border-radius: 10px;
      border: 1px green solid;
      padding-left: 10px;
    }
  }

  .react-datepicker__day {
    font-size: 16px;
  }

  .react-datepicker__day--selected {
    background-color: yellow;
    color: red;
  }

`;
