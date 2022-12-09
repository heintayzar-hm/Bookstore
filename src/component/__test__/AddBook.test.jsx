import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import AddBook from '../AddBook';

describe('AddBook', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <AddBook />,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });

  test('Have the text Add Book ', () => {
    // Arrange

    // Act
    const { getByText } = render(<AddBook />);

    // Assert
    expect(getByText('Add New Book').innerHTML).toBe('Add New Book');
  });

  test('AddBook has two input elements', () => {
    const { getByTestId } = render(<AddBook />);
    const title = getByTestId('book-title-input');
    const author = getByTestId('author-title-input');
    expect(title.placeholder).toBe('Book Title');
    expect(author.placeholder).toBe('Author');
  });

  test('AddBook has one submit button', () => {
    const { getAllByText } = render(<AddBook />);
    const button = getAllByText('Add Book');
    expect(button).toHaveLength(1);
  });
});
