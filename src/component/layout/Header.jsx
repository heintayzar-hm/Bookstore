import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

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
      <nav className="border-b-2 border-solid border-[#e8e8e8] items-center justify-center font-important py-[24px] px-[1%] md:px-[4%] grid grid-cols-10 text-center">
        <h1 className="font-bold col-span-4 text-lg sm:text-3xl text-blue">
          <NavLink
            to={links[0].path}
            data-testid="link-item"
          >
            Bookstore CMS
          </NavLink>
        </h1>
        <div className="col-span-5">
          <ul className="grid grid-cols-2 text-sm md:text-base h-full text-center items-center">
            {links.map((link) => (
              <li key={link.id} className="text-brown dark:text-white dark:opacity-100 opacity-50 tracking-widest">
                {' '}
                <NavLink
                  to={link.path}
                  data-testid="link-item"
                  style={({ isActive }) => ({ opacity: isActive ? 1 : 0.5 })}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <BsFillPersonFill className="text-blue hidden xs:block w-8 h-8 p-1 border-b-slate-200 border-2 rounded-full" />

        </div>
      </nav>
    );
  }
}
export default Header;
