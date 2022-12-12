import { describe, test } from 'vitest';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from '../App';
import store from '../state/store';

describe('App', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });
});
