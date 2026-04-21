import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge component for displaying status labels, tags, and categorical information with various variants and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge text content',
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: 'Badge style variant',
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Badge size',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    label: 'Active',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Pending',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Inactive',
    variant: 'error',
  },
};

export const Info: Story = {
  args: {
    label: 'Info',
    variant: 'info',
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Badge',
    size: 'lg',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-3 flex-wrap justify-center">
      <Badge label="Primary" variant="primary" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Error" variant="error" />
      <Badge label="Info" variant="info" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-3 flex-wrap justify-center items-center">
      <Badge label="Small" size="sm" />
      <Badge label="Medium" size="md" />
      <Badge label="Large" size="lg" />
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap justify-center">
      <Badge label="✓ Published" variant="success" />
      <Badge label="⏱ Draft" variant="warning" />
      <Badge label="✕ Archived" variant="error" />
    </div>
  ),
};
