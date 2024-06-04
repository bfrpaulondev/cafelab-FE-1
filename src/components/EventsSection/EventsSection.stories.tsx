import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {EventsSection} from './EventsSection';

const meta: Meta<typeof EventsSection> = {
  component: EventsSection,
};

export default meta;

type Story = StoryObj<typeof EventsSection>;

export const Basic: Story = {args: {}};
