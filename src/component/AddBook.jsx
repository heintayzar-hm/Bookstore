import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class AddBook extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <>
        <article data-testid="form-container">
          <h2>Add New Book</h2>
          <form>
            <input name="title" data-testid="book-title-input" type="text" placeholder="Book Title" required />
            <input name="author" data-testid="author-title-input" type="text" placeholder="Author" required />
            <button type="submit">Add Book</button>
          </form>
        </article>
      </>
    );
  }
}

export default AddBook;
