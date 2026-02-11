import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders ConsoNet title', () => {
    render(<App />);
    expect(screen.getByText('ConsoNet')).toBeInTheDocument();
  });

  it('renders main heading', () => {
    render(<App />);
    expect(screen.getByText(/Maîtrisez votre/i)).toBeInTheDocument();
  });

  it('renders download button', () => {
    render(<App />);
    expect(screen.getByText('Télécharger')).toBeInTheDocument();
  });
});
