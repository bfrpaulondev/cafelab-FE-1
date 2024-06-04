import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {AdminServiceDashboard} from './AdminServiceDashboard';

const meta: Meta<typeof AdminServiceDashboard> = {
  component: AdminServiceDashboard,
};

export default meta;

type Story = StoryObj<typeof AdminServiceDashboard>;

export const Basic: Story = {args: {}};
