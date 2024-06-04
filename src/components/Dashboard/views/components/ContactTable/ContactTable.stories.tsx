import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ContactTable } from './ContactTable';

const meta: Meta<typeof ContactTable> = {
  component: ContactTable,
};

export default meta;

type Story = StoryObj<typeof ContactTable>;

export const Basic: Story = { args: {} };
