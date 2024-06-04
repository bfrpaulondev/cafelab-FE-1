import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {HomeHeroSection} from './HomeHeroSection';

const meta: Meta<typeof HomeHeroSection> = {
  component: HomeHeroSection,
};

export default meta;

type Story = StoryObj<typeof HomeHeroSection>;

export const Basic: Story = {args: {}};
