import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../lib/components';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
};
