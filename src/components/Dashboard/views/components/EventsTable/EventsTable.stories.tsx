import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {EventsTable} from './EventsTable';

const meta: Meta<typeof EventsTable> = {
  component: EventsTable,
};

export default meta;

type Story = StoryObj<typeof EventsTable>;

export const Basic: Story = {args: {}};
