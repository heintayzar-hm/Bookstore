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
        <article data-testid="form-container">
          <h2>Add New Book</h2>
          <form>
            <input data-testid="book-title-input" type="text" placeholder="Book Title" value="" required />
            <input data-testid="author-title-input" type="text" placeholder="Author" value="" required />
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
