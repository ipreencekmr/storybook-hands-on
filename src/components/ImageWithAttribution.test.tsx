import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ImageWithAttribution } from './ImageWithAttribution';

describe('ImageWithAttribution Component', () => {
  const mockAttribution = {
    photographer: 'John Doe',
    source: 'https://unsplash.com',
    license: 'Creative Commons',
  };

  it('renders image with src and alt', () => {
    render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={mockAttribution}
      />
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'test-image.jpg');
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  it('renders title when provided', () => {
    render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        title="Test Title"
        attribution={mockAttribution}
      />
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('does not render title when not provided', () => {
    const { container } = render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={mockAttribution}
      />
    );
    const headings = container.querySelectorAll('h3');
    expect(headings.length).toBe(0);
  });

  it('renders photographer name in attribution', () => {
    render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={mockAttribution}
      />
    );
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  });

  it('renders source link', () => {
    render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={mockAttribution}
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://unsplash.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders license information when provided', () => {
    render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={mockAttribution}
      />
    );
    expect(screen.getByText(/License: Creative Commons/)).toBeInTheDocument();
  });

  it('does not render license when not provided', () => {
    render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={{
          photographer: 'Jane Doe',
          source: 'https://example.com',
        }}
      />
    );
    const licenseElements = screen.queryAllByText(/License:/);
    expect(licenseElements.length).toBe(0);
  });

  it('applies width style', () => {
    render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={mockAttribution}
        width={300}
      />
    );
    const img = screen.getByRole('img');
    expect(img).toHaveStyle('width: 300px');
  });

  it('applies height style', () => {
    render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={mockAttribution}
        height={250}
      />
    );
    const img = screen.getByRole('img');
    expect(img).toHaveStyle('height: 250px');
  });

  it('renders figure element', () => {
    const { container } = render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={mockAttribution}
      />
    );
    expect(container.querySelector('figure')).toBeInTheDocument();
  });

  it('renders figcaption with attribution', () => {
    const { container } = render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={mockAttribution}
      />
    );
    expect(container.querySelector('figcaption')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ImageWithAttribution
        src="test-image.jpg"
        alt="Test image"
        attribution={mockAttribution}
        className="custom-class"
      />
    );
    expect(container.querySelector('figure')).toHaveClass('custom-class');
  });
});
