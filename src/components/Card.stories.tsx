import type { Meta, StoryObj } from '@storybook/react';
import { Card, type CardProps } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component for displaying content with optional title, description, and shadow elevation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text displayed in the card heading',
    },
    description: {
      control: 'text',
      description: 'Optional description text below the title',
    },
    elevation: {
      control: { type: 'radio' },
      options: ['low', 'medium', 'high'],
      description: 'Shadow elevation level for depth effect',
    },
    children: {
      description: 'Card content (child elements)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a default card with medium shadow elevation.',
  },
};

export const WithContent: Story = {
  args: {
    title: 'Card with Content',
    description: 'This card demonstrates content inside.',
    children: (
      <div className="space-y-2">
        <p className="text-sm text-gray-700">Custom content goes here</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Action Button
        </button>
      </div>
    ),
  },
};

export const HighElevation: Story = {
  args: {
    title: 'High Elevation Card',
    description: 'This card has high shadow elevation for prominence.',
    elevation: 'high',
  },
};

export const LowElevation: Story = {
  args: {
    title: 'Low Elevation Card',
    description: 'Subtle shadow for minimal depth.',
    elevation: 'low',
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'Simple Card',
    elevation: 'medium',
  },
};
