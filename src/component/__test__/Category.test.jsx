import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Category from '../Category';

describe('Category', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <Category />,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });

  test('Have check status button', () => {
    // Arrange

    // Act
    const { queryByTestId } = render(
      <Category />,
    );
    const button = queryByTestId('check-status');
    // Assert
    expect(button.innerHTML).toBe('Check Status');
  });
});
