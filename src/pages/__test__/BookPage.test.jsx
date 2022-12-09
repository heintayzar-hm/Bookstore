import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import BooksPage from '../BookPage';

describe('BookPage', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <BooksPage />,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });
});
