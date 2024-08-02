import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
	component: Input,
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const ReadOnly: Story = {
	args: {
		readOnly: true,
	},
};
