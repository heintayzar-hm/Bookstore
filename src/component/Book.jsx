import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Book extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const {
      id, title, author, removeBook,
    } = this.props;
    return (
      <>
        <div>
          <article>
            <span>{id}</span>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <button onClick={() => removeBook(id)} type="button">Remove</button>
          </article>
        </div>
      </>
    );
  }
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default Book;
