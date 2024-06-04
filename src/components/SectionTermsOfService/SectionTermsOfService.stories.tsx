import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {SectionTermsOfService} from './SectionTermsOfService';

const meta: Meta<typeof SectionTermsOfService> = {
  component: SectionTermsOfService,
};

export default meta;

type Story = StoryObj<typeof SectionTermsOfService>;

export const Basic: Story = {args: {}};
