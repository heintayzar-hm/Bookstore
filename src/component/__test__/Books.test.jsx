import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Books from '../Books';
import store from '../../state/configureStore';

describe('Books', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <Provider store={store}>
        <Books />
      </Provider>
      ,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });

  test('Have add new component', () => {
    // Arrange

    // Act
    const { getAllByText } = render(
      <Provider store={store}>
        <Books />
      </Provider>,
    );
    // Assert
    expect(getAllByText('Add New Book').length).toBe(1);
  });
});
