import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Book from '../Book';

describe('Book', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <Book />,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });

  test('Have Remove Button', () => {
    // Arrange

    // Act
    const { getAllByText } = render(
      <Book />,
    );
    // Assert
    expect(getAllByText('Remove').length).toBe(1);
  });
});
