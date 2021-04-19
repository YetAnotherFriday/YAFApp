import React from 'react';
import { Story, Meta } from '@storybook/react';



import { Header, HeaderProps } from './header';






export default {
  title: 'EXAMPLE/header component',
  component: Header,
  argTypes: {
    isSignedIn: { control: Boolean },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const SI = Template.bind({});
SI.args = {
  isSignedIn: true
};

export const signedOut = Template.bind({});
signedOut.args = {
  isSignedIn: false
};

