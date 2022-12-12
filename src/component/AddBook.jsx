import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class AddBook extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      author: '',
      title: '',
    };
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { addBook } = this.props;
    const { title, author } = this.state;
    if (title.trim() && author.trim()) {
      addBook(title, author);
      this.setState({
        author: '',
        title: '',
      });
    }
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { author, title } = this.state;
    return (
      <>
        <article data-testid="form-container">
          <h2>Add New Book</h2>
          <form onSubmit={this.submitHandler}>
            <input name="title" onChange={this.changeHandler} data-testid="book-title-input" type="text" placeholder="Book Title" value={title} required />
            <input name="author" onChange={this.changeHandler} data-testid="author-title-input" type="text" placeholder="Author" value={author} required />
            <button type="submit">Add Book</button>
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
