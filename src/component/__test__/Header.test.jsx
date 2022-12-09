import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <HashRouter><Header /></HashRouter>
      ,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });

  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { getAllByTestId } = render(
      <HashRouter><Header /></HashRouter>
      ,
    );
    // Assert
    expect(getAllByTestId('link-item')).toHaveLength(2);
  });
});
