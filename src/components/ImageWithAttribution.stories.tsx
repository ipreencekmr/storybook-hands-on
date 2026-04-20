import type { Meta, StoryObj } from '@storybook/react';
import { ImageWithAttribution, type ImageWithAttributionProps } from './ImageWithAttribution';

const meta = {
  title: 'Components/ImageWithAttribution',
  component: ImageWithAttribution,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Image component with proper attribution and credit display for photographers and sources.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for accessibility',
    },
    title: {
      control: 'text',
      description: 'Optional title above the image',
    },
    width: {
      control: 'text',
      description: 'Image width',
    },
    height: {
      control: 'text',
      description: 'Image height',
    },
    attribution: {
      description: 'Attribution object with photographer and source',
    },
  },
} satisfies Meta<typeof ImageWithAttribution>;

export default meta;
type Story = StoryObj<typeof meta>;

const placeholderImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop';

export const Default: Story = {
  args: {
    src: placeholderImage,
    alt: 'Mountain landscape',
    title: 'Beautiful Mountain View',
    attribution: {
      photographer: 'John Doe',
      source: 'https://unsplash.com',
      license: 'Creative Commons',
    },
    width: 400,
    height: 300,
  },
};

export const WithoutTitle: Story = {
  args: {
    src: placeholderImage,
    alt: 'Nature photo',
    attribution: {
      photographer: 'Jane Smith',
      source: 'https://pexels.com',
      license: 'Free for personal use',
    },
    width: 350,
    height: 250,
  },
};

export const WithoutLicense: Story = {
  args: {
    src: placeholderImage,
    alt: 'Landscape',
    title: 'Scenic View',
    attribution: {
      photographer: 'Bob Wilson',
      source: 'https://pixabay.com',
    },
    width: 400,
    height: 300,
  },
};

export const LargeImage: Story = {
  args: {
    src: placeholderImage,
    alt: 'Full width image',
    title: 'Large Featured Image',
    attribution: {
      photographer: 'Alice Johnson',
      source: 'https://unsplash.com/photos/example',
      license: 'Unsplash License',
    },
    width: '100%',
    height: 450,
  },
};

export const SmallThumbnail: Story = {
  args: {
    src: placeholderImage,
    alt: 'Small thumbnail',
    attribution: {
      photographer: 'Carlos Rodriguez',
      source: 'https://example.com/photo',
    },
    width: 150,
    height: 150,
  },
};
