import React from 'react';
import Categories from '../component/Categories';

// eslint-disable-next-line react/prefer-stateless-function
class CategoriesPage extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <>
        <Categories />
      </>
    );
  }
}
export default CategoriesPage;
