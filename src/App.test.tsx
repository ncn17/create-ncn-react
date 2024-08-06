import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Renders hello world !', () => {
    // Arrange
    render(<App />);

    screen.debug();
    // ACT

    // Assert oe Expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World !');
  });
});
