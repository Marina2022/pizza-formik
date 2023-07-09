import Calendar from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Field} from 'formik';
import {DatePickerWrapperStyles} from './DatePickerStyle';
import {registerLocale, setDefaultLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';

const DatePicker = (props: any) => {
  const {name, label} = props


  registerLocale('ru', ru)


  return (
    <div>

      <h2>{label}</h2>
      <Field name={name}>
        {
          (props: any) => {
            const {field, form} = props
            const {setFieldValue} = form

            return (
              <div>
                <Calendar locale="ru"
                          wrapperClassName='date_picker full-width' selected={field.value}
                          onChange={(date) => setFieldValue(name, date)}/>
                {/*Этот нижний компонент - для стилизации*/}
                <DatePickerWrapperStyles/>
              </div>
            )
          }
        }


      </Field>

    </div>
  );
};

export default DatePicker;
