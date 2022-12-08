import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const links = [
      {
        id: 1,
        path: '/books',
        text: 'Books',
      },
      {
        id: 2,
        path: '/categories',
        text: 'Categories',
      },
    ];
    return (
      <nav>
        <h1>BookStore</h1>
        <div>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                {' '}
                <NavLink
                  to={link.path}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
