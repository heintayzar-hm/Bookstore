import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import BooksPage from '../BookPage';
import store from '../../state/store';
describe('BookPage', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <Provider store={store}>
        <BooksPage />
      </Provider>
      ,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });
});
