import { SetStateType } from 'types/commonTypes';

export type errorObjectType = {
  errorText?: string;
};

type ValuesType = {
  email: string;
  text: string;
};

export type ValidationParamsType = {
  values: ValuesType;
  setCurrentError: SetStateType<string>;
  minLength: number;
};

export type OnSubmitParamsType = {
  values: ValuesType;
  setIsPreloaderVisible: SetStateType<boolean>;
  setIsFormHasBeenSubmitted: SetStateType<boolean>;
  setIsErrorSendForm: SetStateType<boolean>;
};
