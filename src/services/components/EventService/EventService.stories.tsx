import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {EventService} from './EventService';

const meta: Meta<typeof EventService> = {
  component: EventService,
};

export default meta;

type Story = StoryObj<typeof EventService>;

export const Basic: Story = {args: {}};
