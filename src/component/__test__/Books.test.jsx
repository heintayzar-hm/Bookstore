import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Books from '../Books';

describe('Books', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <Books />,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });

  test('Have add new component', () => {
    // Arrange

    // Act
    const { getAllByText } = render(
      <Books />,
    );
    // Assert
    expect(getAllByText('Add New Book').length).toBe(1);
  });
});
