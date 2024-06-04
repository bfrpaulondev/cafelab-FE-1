import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {SectionRefundPolicy} from './SectionRefundPolicy';

const meta: Meta<typeof SectionRefundPolicy> = {
  component: SectionRefundPolicy,
};

export default meta;

type Story = StoryObj<typeof SectionRefundPolicy>;

export const Basic: Story = {args: {}};
