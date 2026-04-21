import type { Meta, StoryObj } from '@storybook/react-vite';
import { AnimatedSidebar } from './AnimatedSidebar';

const meta = {
  title: 'Components/AnimatedSidebar',
  component: AnimatedSidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Animated sidebar component with collapsible menu items and smooth transitions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Sidebar title',
    },
    items: {
      control: 'object',
      description: 'Menu items array',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Initial open state',
    },
    onItemClick: {
      description: 'Callback when menu item is clicked',
    },
  },
} satisfies Meta<typeof AnimatedSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = ['Dashboard', 'Profile', 'Settings', 'Help', 'Logout'];

export const Default: Story = {
  args: {
    title: 'Menu',
    items: defaultItems,
    defaultOpen: true,
  },
};

export const Collapsed: Story = {
  args: {
    title: 'Menu',
    items: defaultItems,
    defaultOpen: false,
  },
};

export const ManyItems: Story = {
  args: {
    title: 'Navigation',
    items: [
      'Home',
      'About',
      'Services',
      'Products',
      'Blog',
      'Contact',
      'FAQ',
      'Pricing',
      'Testimonials',
      'Gallery',
    ],
    defaultOpen: true,
  },
};

export const FewItems: Story = {
  args: {
    title: 'Quick Access',
    items: ['Home', 'Profile'],
    defaultOpen: true,
  },
};
