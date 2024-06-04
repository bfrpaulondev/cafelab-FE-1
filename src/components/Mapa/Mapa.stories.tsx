import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Mapa} from './Mapa';

const meta: Meta<typeof Mapa> = {
  component: Mapa,
};

export default meta;

type Story = StoryObj<typeof Mapa>;

export const Basic: Story = {args: {}};
