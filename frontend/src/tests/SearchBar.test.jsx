import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('renders search input and triggers onSearch', () => {
  const mockSearch = jest.fn();
  render(<SearchBar onSearch={mockSearch} />);

  const input = screen.getByPlaceholderText(/search/i);
  fireEvent.change(input, { target: { value: 'India' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(mockSearch).toHaveBeenCalledWith('India');
});
