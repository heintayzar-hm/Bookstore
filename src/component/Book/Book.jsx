import React from 'react';
import PropTypes from 'prop-types';
import GeneralSection from './generalSection';
import ProgressSection from './ProgressSection';

// eslint-disable-next-line react/prefer-stateless-function
class Book extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const {
      id, title, author, removeBook, category,
    } = this.props;
    return (
      <>
        <li className="border rounded p-8 border-[#e8e8e8]">
          <article className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            <GeneralSection
              id={id}
              title={title}
              author={author}
              removeBook={removeBook}
              category={category}
            />
            <ProgressSection
              chapter={`${Math.floor(Math.random() * 50) + 1}`}
              totalChapter={`${Math.floor(Math.random() * 51) + 50}`}
            />
          </article>
        </li>
      </>
    );
  }
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
