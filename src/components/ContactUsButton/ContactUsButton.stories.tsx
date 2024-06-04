import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ContactUsButton} from './ContactUsButton';

const meta: Meta<typeof ContactUsButton> = {
  component: ContactUsButton,
};

export default meta;

type Story = StoryObj<typeof ContactUsButton>;

export const Basic: Story = {args: {}};
