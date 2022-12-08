import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class AddBook extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { addBook } = this.props;
    return (
      <>
        <article>
          <h2>Add new book</h2>
          <form>
            <input type="text" placeholder="Book Title" value="" required />
            <input type="text" placeholder="Author" value="" required />
          </form>
        </article>
      </>
    );
  }
}

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};
export default AddBook;
