import { errorObjectType, ValidationParamsType } from './types';

export const validation = (params: ValidationParamsType) => {
  const { values, setCurrentError, minLength } = params;

  const errorObject: errorObjectType = {};

  if (!values.email && !values.text) {
    errorObject.errorText = "Can't send an empty form";
    setCurrentError(errorObject.errorText);
  } else if (values.email === '') {
    errorObject.errorText = 'Email required';
    setCurrentError(errorObject.errorText);
  } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errorObject.errorText = 'Invalid email address';
    setCurrentError(errorObject.errorText);
  } else if (!values.text || values.text.length === 0) {
    errorObject.errorText = 'Message text required';
    setCurrentError(errorObject.errorText);
  } else if (values.text.length < minLength) {
    errorObject.errorText = `Text must be at least ${minLength} characters`;
    setCurrentError(errorObject.errorText);
  }

  return errorObject;
};
