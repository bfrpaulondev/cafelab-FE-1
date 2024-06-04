import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {NewsLetter} from './NewsLetter';

const meta: Meta<typeof NewsLetter> = {
  component: NewsLetter,
};

export default meta;

type Story = StoryObj<typeof NewsLetter>;

export const Basic: Story = {args: {}};
