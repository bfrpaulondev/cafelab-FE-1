import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {CartComponent} from './CartComponent';

const meta: Meta<typeof CartComponent> = {
  component: CartComponent,
};

export default meta;

type Story = StoryObj<typeof CartComponent>;

export const Basic: Story = {args: {}};
