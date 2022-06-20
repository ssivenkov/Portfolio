import {KeyboardEvent, MouseEvent} from 'react';

export type NavigationButtonPropsType = {
  id: string;
  title: string;
};

export type EventHandlerType = MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>;
