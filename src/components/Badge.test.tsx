import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge Component', () => {
  it('renders with label text', () => {
    render(<Badge label="Test Badge" />);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('renders primary variant by default', () => {
    const { container } = render(<Badge label="Test" />);
    expect(container.querySelector('span')).toHaveClass('bg-blue-100', 'text-blue-800');
  });

  it('renders success variant', () => {
    const { container } = render(<Badge label="Success" variant="success" />);
    expect(container.querySelector('span')).toHaveClass('bg-green-100', 'text-green-800');
  });

  it('renders warning variant', () => {
    const { container } = render(<Badge label="Warning" variant="warning" />);
    expect(container.querySelector('span')).toHaveClass('bg-yellow-100', 'text-yellow-800');
  });

  it('renders error variant', () => {
    const { container } = render(<Badge label="Error" variant="error" />);
    expect(container.querySelector('span')).toHaveClass('bg-red-100', 'text-red-800');
  });

  it('renders info variant', () => {
    const { container } = render(<Badge label="Info" variant="info" />);
    expect(container.querySelector('span')).toHaveClass('bg-cyan-100', 'text-cyan-800');
  });

  it('applies small size class', () => {
    const { container } = render(<Badge label="Small" size="sm" />);
    expect(container.querySelector('span')).toHaveClass('text-xs', 'px-2', 'py-1');
  });

  it('applies medium size class by default', () => {
    const { container } = render(<Badge label="Medium" />);
    expect(container.querySelector('span')).toHaveClass('text-sm', 'px-3', 'py-1.5');
  });

  it('applies large size class', () => {
    const { container } = render(<Badge label="Large" size="lg" />);
    expect(container.querySelector('span')).toHaveClass('text-base', 'px-4', 'py-2');
  });

  it('applies custom className', () => {
    const { container } = render(<Badge label="Custom" className="custom-class" />);
    expect(container.querySelector('span')).toHaveClass('custom-class');
  });

  it('renders with border class', () => {
    const { container } = render(<Badge label="Badge" />);
    expect(container.querySelector('span')).toHaveClass('border');
  });

  it('renders with font-semibold', () => {
    const { container } = render(<Badge label="Bold" />);
    expect(container.querySelector('span')).toHaveClass('font-semibold');
  });

  it('renders as span element', () => {
    const { container } = render(<Badge label="Test" />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders with rounded-full class', () => {
    const { container } = render(<Badge label="Round" />);
    expect(container.querySelector('span')).toHaveClass('rounded-full');
  });

  it('combines variant and size correctly', () => {
    const { container } = render(<Badge label="Test" variant="success" size="lg" />);
    const badge = container.querySelector('span');
    expect(badge).toHaveClass('bg-green-100');
    expect(badge).toHaveClass('text-base');
  });
});
