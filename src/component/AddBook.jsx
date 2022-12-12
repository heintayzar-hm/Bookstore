import React from 'react';

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

  render() {
    // eslint-disable-next-line no-unused-vars
    const { author, title } = this.state;
    return (
      <>
        <article data-testid="form-container">
          <h2>Add New Book</h2>
          <form onSubmit={this.submitHandler}>
            <input name="title" data-testid="book-title-input" type="text" placeholder="Book Title" value={title} required />
            <input name="author" data-testid="author-title-input" type="text" placeholder="Author" value={author} required />
            <button type="submit">Add Book</button>
          </form>
        </article>
      </>
    );
  }
}

export default AddBook;
