import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../components/Checkbox';

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		value: { control: 'boolean' },
		onChange: { action: 'onChange' },
		className: { control: 'text' },
	},
	args: {
		value: false,
	},
};
