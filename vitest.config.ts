import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { getVitestConfig } from '@storybook/experimental-addon-test/vitest-plugin';

export default defineConfig(
  getVitestConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html', 'lcov'],
        all: true,
        include: ['src/components/**/*.tsx'],
        exclude: [
          '**/*.stories.tsx',
          '**/*.test.tsx',
          '**/node_modules/**',
        ],
      },
    },
  })
);
