import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LandingSignUp from '../LandingSignUp';

it('renders welcome message', () => {
  render(<LandingSignUp />);
  expect(screen.getByText('Learn to code by watching others')).toBeInTheDocument();
});