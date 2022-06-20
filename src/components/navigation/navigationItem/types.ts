import {KeyboardEvent, MouseEvent} from 'react';

export type NavigationItemPropsType = {
  id: string;
  title: string;
};

export type ScrollToSectionIdParamsType =
  | MouseEvent<HTMLDivElement>
  | KeyboardEvent<HTMLDivElement>;
