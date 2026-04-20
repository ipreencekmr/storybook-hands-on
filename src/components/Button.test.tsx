import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('renders primary variant by default', () => {
    const { container } = render(<Button>Primary</Button>);
    expect(container.querySelector('button')).toHaveClass('bg-blue-600');
  });

  it('renders secondary variant', () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>);
    expect(container.querySelector('button')).toHaveClass('bg-gray-300');
  });

  it('renders danger variant', () => {
    const { container } = render(<Button variant="danger">Delete</Button>);
    expect(container.querySelector('button')).toHaveClass('bg-red-600');
  });

  it('renders outline variant', () => {
    const { container } = render(<Button variant="outline">Outline</Button>);
    expect(container.querySelector('button')).toHaveClass('border-blue-600');
  });

  it('applies small size class', () => {
    const { container } = render(<Button size="sm">Small</Button>);
    expect(container.querySelector('button')).toHaveClass('px-3', 'py-1', 'text-sm');
  });

  it('applies medium size class by default', () => {
    const { container } = render(<Button>Medium</Button>);
    expect(container.querySelector('button')).toHaveClass('px-4', 'py-2', 'text-base');
  });

  it('applies large size class', () => {
    const { container } = render(<Button size="lg">Large</Button>);
    expect(container.querySelector('button')).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('shows loading text when isLoading is true', () => {
    render(<Button isLoading>Submit</Button>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('disables button when loading', () => {
    render(<Button isLoading>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('applies custom className', () => {
    const { container } = render(<Button className="custom-class">Test</Button>);
    expect(container.querySelector('button')).toHaveClass('custom-class');
  });

  it('applies opacity and cursor not-allowed when disabled', () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    expect(container.querySelector('button')).toHaveClass('opacity-50', 'cursor-not-allowed');
  });
});
