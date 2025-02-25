import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Button } from './Button';

const meta = {
	component: Button,
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: `Primary`,
		type: `primary`,
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole(`button`);

		await expect(button).toHaveTextContent(/Primary/);
		await userEvent.click(button);
		await expect(args.onClick).toHaveBeenCalled();
	},
};

export const Secondary: Story = {
	args: {
		children: `Secondary`,
		type: `secondary`,
	},
};
