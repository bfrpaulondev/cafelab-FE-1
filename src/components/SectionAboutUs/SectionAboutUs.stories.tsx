import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {SectionAboutUs} from './SectionAboutUs';

const meta: Meta<typeof SectionAboutUs> = {
  component: SectionAboutUs,
};

export default meta;

type Story = StoryObj<typeof SectionAboutUs>;

export const Basic: Story = {args: {}};
