import React from 'react';
import Category from '../component/Category';

// eslint-disable-next-line react/prefer-stateless-function
class CategoriesPage extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <>
        <Category />
      </>
    );
  }
}
export default CategoriesPage;
