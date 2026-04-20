import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AnimatedSidebar } from './AnimatedSidebar';

describe('AnimatedSidebar Component', () => {
  const mockItems = ['Dashboard', 'Profile', 'Settings'];

  it('renders sidebar with title', () => {
    render(<AnimatedSidebar title="Menu" items={mockItems} />);
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  it('renders all menu items', () => {
    render(<AnimatedSidebar title="Menu" items={mockItems} />);
    mockItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders open by default', () => {
    const { container } = render(<AnimatedSidebar title="Menu" items={mockItems} defaultOpen={true} />);
    const sidebar = container.querySelector('div.transition-all');
    expect(sidebar).toHaveClass('w-64');
  });

  it('renders closed initially when defaultOpen is false', () => {
    const { container } = render(<AnimatedSidebar title="Menu" items={mockItems} defaultOpen={false} />);
    const sidebar = container.querySelector('div.transition-all');
    expect(sidebar).toHaveClass('w-20');
  });

  it('toggles sidebar on button click', () => {
    const { container } = render(<AnimatedSidebar title="Menu" items={mockItems} defaultOpen={true} />);
    const toggleButton = screen.getByRole('button', { name: /toggle sidebar/i });
    fireEvent.click(toggleButton);
    const sidebar = container.querySelector('div.transition-all');
    expect(sidebar).toHaveClass('w-20');
  });

  it('calls onItemClick when menu item is clicked', () => {
    const handleItemClick = vi.fn();
    render(<AnimatedSidebar title="Menu" items={mockItems} onItemClick={handleItemClick} />);
    const dashboardButton = screen.getAllByRole('button').find((btn) => btn.textContent?.includes('Dashboard'));
    fireEvent.click(dashboardButton!);
    expect(handleItemClick).toHaveBeenCalledWith('Dashboard');
  });

  it('renders welcome message', () => {
    render(<AnimatedSidebar title="Menu" items={mockItems} />);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  it('shows status message based on open state', () => {
    const { rerender } = render(<AnimatedSidebar title="Menu" items={mockItems} defaultOpen={true} />);
    expect(screen.getByText(/The sidebar is currently open/i)).toBeInTheDocument();
    rerender(<AnimatedSidebar title="Menu" items={mockItems} defaultOpen={false} />);
    expect(screen.getByText(/The sidebar is now collapsed/i)).toBeInTheDocument();
  });

  it('renders toggle button', () => {
    render(<AnimatedSidebar title="Menu" items={mockItems} />);
    expect(screen.getByRole('button', { name: /toggle sidebar/i })).toBeInTheDocument();
  });

  it('renders menu icon for each item', () => {
    const { container } = render(<AnimatedSidebar title="Menu" items={mockItems} />);
    const svgs = container.querySelectorAll('nav svg');
    expect(svgs.length).toBe(mockItems.length);
  });

  it('handles multiple item clicks', () => {
    const handleItemClick = vi.fn();
    render(<AnimatedSidebar title="Menu" items={mockItems} onItemClick={handleItemClick} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]); // Skip toggle button
    fireEvent.click(buttons[2]);
    expect(handleItemClick).toHaveBeenCalledTimes(2);
  });
});
