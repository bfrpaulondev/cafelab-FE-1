import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {SubscriptionComponent} from './SubscriptionComponent';

const meta: Meta<typeof SubscriptionComponent> = {
  component: SubscriptionComponent,
};

export default meta;

type Story = StoryObj<typeof SubscriptionComponent>;

export const Basic: Story = {args: {}};
