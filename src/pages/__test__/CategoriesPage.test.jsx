import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import CategoriesPage from '../CategoriesPage';

describe('CategoriesPage', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <CategoriesPage />,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });

  test('Have check status button', () => {
    // Arrange

    // Act
    const { queryByTestId } = render(
      <CategoriesPage />,
    );
    const button = queryByTestId('check-status');
    // Assert
    expect(button.innerHTML).toBe('Check Status');
  });
});
