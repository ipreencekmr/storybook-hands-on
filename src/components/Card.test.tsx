import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card Component', () => {
  it('renders with title', () => {
    render(<Card title="Test Card" />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<Card title="Test" description="Test description" />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <Card title="Test">
        <div>Child content</div>
      </Card>
    );
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('applies low elevation class', () => {
    const { container } = render(<Card title="Test" elevation="low" />);
    expect(container.firstChild).toHaveClass('shadow-sm');
  });

  it('applies medium elevation class by default', () => {
    const { container } = render(<Card title="Test" />);
    expect(container.firstChild).toHaveClass('shadow-md');
  });

  it('applies high elevation class', () => {
    const { container } = render(<Card title="Test" elevation="high" />);
    expect(container.firstChild).toHaveClass('shadow-lg');
  });

  it('applies custom className', () => {
    const { container } = render(<Card title="Test" className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders without description when not provided', () => {
    render(<Card title="Test" />);
    const paragraphs = screen.queryAllByRole('paragraph');
    expect(paragraphs.length).toBe(0);
  });

  it('renders title with correct heading level', () => {
    render(<Card title="Test Card" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Test Card');
  });

  it('combines title, description, and children', () => {
    render(
      <Card title="Main" description="Sub text">
        <span>Extra content</span>
      </Card>
    );
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('Sub text')).toBeInTheDocument();
    expect(screen.getByText('Extra content')).toBeInTheDocument();
  });
});
