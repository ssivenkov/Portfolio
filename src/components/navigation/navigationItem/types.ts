import {KeyboardEvent, MouseEvent} from 'react';

export type NavigationItemPropsType = {
  id: string;
  title: string;
};

export type SectionType = MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>;
