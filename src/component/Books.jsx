import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBookAction, removeBookAction, showBookAction } from '../redux/books/booksReducer';
import AddBook from './AddBook/AddBook';
import Book from './Book/Book';
import { editBookAction } from '../redux/actions/booksActions';

// eslint-disable-next-line react/prefer-stateless-function
class Books extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      updateStateID: -1,
    };
    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.editBook = this.editBook.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }

  componentDidUpdate() {
    const { updateStateID } = this.state;
    if (updateStateID !== -1) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  updateHandler = (id) => {
    this.setState(() => ({
      updateStateID: id,
    }));
  }

  fetchBooks() {
    const { dispatch } = this.props;
    dispatch(showBookAction());
  }

  addBook(title, author, category) {
    const { dispatch } = this.props;
    dispatch(addBookAction({ title, author, category }));
  }

  removeBook(id) {
    // eslint-disable-next-line no-alert, no-restricted-globals
    if (!confirm('Do you really want to remove the book?')) {
      return;
    }
    const { dispatch } = this.props;
    dispatch(removeBookAction(id));
  }

  editBook({
    id, title, author, category, currentChapter, totalChapter,
  }) {
    const { dispatch } = this.props;
    dispatch(editBookAction({
      id, title, author, category, currentChapter, totalChapter,
    }));
  }

  render() {
    const { books } = this.props;
    const { updateStateID } = this.state;
    return (
      <>
        <ul className="grid grid-cols-1 gap-10 border-b-2 border-solid pb-10 mb-10 border-[#e8e8e8]">
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              totalChapter={(book.totalChapter) ? +(book.totalChapter) : 0}
              currentChapter={(book.currentChapter) ? +(book.currentChapter) : 0}
              removeBook={this.removeBook}
              updateStateProps={book.id === updateStateID}
              updateHandler={this.updateHandler}
              editBook={this.editBook}
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
      category: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};
export default connect(mapStateToProps)(Books);
