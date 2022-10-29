import React from 'react';
import { render, screen } from '@testing-library/react';
import PearlBaileyHighSchoolFrontEnd from './PearlBaileyHighSchoolFrontEnd';

test('renders learn react link', () => {
  render(<PearlBaileyHighSchoolFrontEnd />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
