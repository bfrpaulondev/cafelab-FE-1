import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ImageUpload} from './ImageUpload';

const meta: Meta<typeof ImageUpload> = {
  component: ImageUpload,
};

export default meta;

type Story = StoryObj<typeof ImageUpload>;

export const Basic: Story = {args: {}};
