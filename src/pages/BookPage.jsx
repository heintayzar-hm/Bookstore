import React from 'react';
import Books from '../component/Books';

// eslint-disable-next-line react/prefer-stateless-function
class BooksPage extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className="p-[4%]">
        <Books />
      </div>
    );
  }
}
export default BooksPage;
