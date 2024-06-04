import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {HeroEventsSection} from './HeroEventsSection';

const meta: Meta<typeof HeroEventsSection> = {
  component: HeroEventsSection,
};

export default meta;

type Story = StoryObj<typeof HeroEventsSection>;

export const Basic: Story = {args: {}};
