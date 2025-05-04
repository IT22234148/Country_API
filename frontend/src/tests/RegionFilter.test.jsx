import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RegionFilter from '../components/RegionFilter';

test('renders region dropdown and triggers onSelect', () => {
  const mockSelect = jest.fn();
  render(<RegionFilter onSelect={mockSelect} />);

  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'Asia' } });

  expect(mockSelect).toHaveBeenCalledWith('Asia');
});
