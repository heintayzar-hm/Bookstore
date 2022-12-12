import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddBook from './AddBook';
import Book from './Book';
// eslint-disable-next-line react/prefer-stateless-function
class Books extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
  }

  render() {
    const { books } = this.props;
    return (
      <>
        <ul>
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              removeBook={this.removeBook}
            />
          ))}
        </ul>
        <AddBook addBook={this.addBook} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  // specify which state data to provide to the component
  books: state.books,
});
Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};
export default connect(mapStateToProps)(Books);
