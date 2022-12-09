import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  test('renders the initial state correctly', () => {
    // Arrange

    // Act
    const { container } = render(
      <HashRouter>
        <App />
      </HashRouter>,
    );
    // Assert
    expect(container).toMatchSnapshot();
  });
});
