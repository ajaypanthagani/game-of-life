import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Conway\'s Game of Life text', () => {
  render(<App />);
  const textElement = screen.getByText(/Conway's Game Of Life/i);
  expect(textElement).toBeInTheDocument();
});
