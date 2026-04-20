import React, { useState } from 'react';

export interface AnimatedSidebarProps {
  title: string;
  items: string[];
  defaultOpen?: boolean;
  onItemClick?: (item: string) => void;
}

export const AnimatedSidebar: React.FC<AnimatedSidebarProps> = ({
  title,
  items,
  defaultOpen = true,
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleItemClick = (item: string) => {
    onItemClick?.(item);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Toggle Button */}
        <div className="p-4 flex items-center justify-between">
          {isOpen && <h3 className="text-lg font-bold">{title}</h3>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-8">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item)}
              className="w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors duration-200 flex items-center gap-3"
              title={!isOpen ? item : undefined}
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              {isOpen && <span className="truncate">{item}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome</h1>
        <p className="text-gray-600">
          Click the menu button to toggle the sidebar. {isOpen ? 'The sidebar is currently open.' : 'The sidebar is now collapsed.'}
        </p>
      </div>
    </div>
  );
};
