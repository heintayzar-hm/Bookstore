import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBookAction, removeBookAction } from '../redux/books/booksReducer';
import AddBook from './AddBook';
import Book from './Book';
import { showBookAction } from '../redux/actions/booksActions';

// eslint-disable-next-line react/prefer-stateless-function
class Books extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
    };
    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks() {
    const { dispatch } = this.props;
    dispatch(showBookAction());
  }

  addBook(title, author) {
    const { dispatch } = this.props;
    dispatch(addBookAction({ title, author }));
  }

  removeBook(id) {
    const { dispatch } = this.props;
    dispatch(removeBookAction(id));
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
  dispatch: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};
export default connect(mapStateToProps)(Books);
