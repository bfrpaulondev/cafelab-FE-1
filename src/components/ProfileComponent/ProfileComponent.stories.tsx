import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ProfileComponent} from './ProfileComponent';

const meta: Meta<typeof ProfileComponent> = {
  component: ProfileComponent,
};

export default meta;

type Story = StoryObj<typeof ProfileComponent>;

export const Basic: Story = {args: {}};
