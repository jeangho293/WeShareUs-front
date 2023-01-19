import { ComponentProps } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { CheckBox } from './CheckBox';

type ArgTypes = ComponentProps<typeof CheckBox>;
export default {
  title: 'components/CheckBox',
  component: CheckBox,
  argTypes: {},
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
