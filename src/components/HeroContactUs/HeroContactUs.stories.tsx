import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {HeroContactUs} from './HeroContactUs';

const meta: Meta<typeof HeroContactUs> = {
  component: HeroContactUs,
};

export default meta;

type Story = StoryObj<typeof HeroContactUs>;

export const Basic: Story = {args: {}};
