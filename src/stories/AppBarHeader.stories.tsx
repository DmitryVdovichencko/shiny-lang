import React from 'react';
import AppBarHeader from '../components/AppBarHeader/';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Layout/AppBarHeader',
  component: AppBarHeader,
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => <AppBarHeader {...args} />;

export const AppBar = Template.bind({});
AppBar.args = {

};
