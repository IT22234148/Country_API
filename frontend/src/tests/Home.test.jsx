import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      {
        cca3: 'IND',
        name: { common: 'India' },
        flags: { png: 'https://flagcdn.com/w320/in.png' },
        population: 1380004385,
        region: 'Asia',
        capital: ['New Delhi']
      }
    ])
  })
);

test('renders countries after fetch', async () => {
  render(<Home />);
  await waitFor(() => {
    expect(screen.getByText(/India/i)).toBeInTheDocument();
  });
});
