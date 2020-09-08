import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn hi there', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hi there/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn bye there', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/bye there/i);
  expect(linkElement).toBeInTheDocument();
});