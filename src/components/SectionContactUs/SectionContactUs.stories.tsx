import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {SectionContactUs} from './SectionContactUs';

const meta: Meta<typeof SectionContactUs> = {
  component: SectionContactUs,
};

export default meta;

type Story = StoryObj<typeof SectionContactUs>;

export const Basic: Story = {args: {}};
