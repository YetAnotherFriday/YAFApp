import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DashboardBody, DashboardProps } from './dashboard';






export default {
  title: 'EXAMPLE/Dashboard Boady component',
  component: DashboardBody,
  argTypes: {
    isSignedIn: { control: Boolean },
  },
} as Meta;

const Template: Story<DashboardProps> = (args) => <DashboardBody {...args} />;

export const SI = Template.bind({});
SI.args = {
  isSignedIn: true
};

export const signedOut = Template.bind({});
signedOut.args = {
  isSignedIn: false
};

