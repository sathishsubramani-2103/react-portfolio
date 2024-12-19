import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('components/navbar/Navbar', () => () => <div data-testid="navbar">Mock Navbar</div>);

describe('App Component', () => {
  test('renders the App component', () => {
    render(<App />);
    const containerElement = screen.getByText(/Mock Navbar/i);
    expect(containerElement).toBeInTheDocument();
  });

  test('includes the Navbar component', () => {
    render(<App />);
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('applies the correct class name', () => {
    render(<App />);
    const container = screen.getByText(/Mock Navbar/i).closest('.container');
    expect(container).toHaveClass('container');
  });
});
