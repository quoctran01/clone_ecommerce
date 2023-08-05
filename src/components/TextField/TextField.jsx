import React from "react";
import { useField, ErrorMessage } from "formik";

const TextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div class='loginMsg emailAuto'>
      <input
        id='email'
        class={`inputS form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        placeholder={placeholder}
        {...field}
        {...props}
        autoComplete='off'
      />
      <ErrorMessage component='div' name={field.name} className='error' />
    </div>
  );
};

export default TextField;
