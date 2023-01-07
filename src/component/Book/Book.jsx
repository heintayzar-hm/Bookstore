import React from 'react';
import PropTypes from 'prop-types';
import GeneralSection from './generalSection';
import ProgressSection from './ProgressSection';
import EditBook from './EditBook';

// eslint-disable-next-line react/prefer-stateless-function
class Book extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
    };
    this.updateProgress = this.updateProgress.bind(this);
  }

  updateProgress({ currentChapter, totalChapter }) {
    const {
      editBook, id, title, author, category,
    } = this.props;
    const updateData = {
      id, title, author, category, currentChapter, totalChapter,
    };
    editBook(updateData);
  }

  render() {
    const {
      id, title, author, removeBook, category, updateHandler,
      updateStateProps, editBook, totalChapter, currentChapter,
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
              updateHandler={updateHandler}
              category={category}
            />
            <ProgressSection
              currentChapter={currentChapter}
              totalChapter={totalChapter}
              updateProgress={this.updateProgress}
            />
            {(updateStateProps)
              ? (
                <EditBook
                  id={id}
                  title={title}
                  author={author}
                  removeBook={removeBook}
                  editHandler={editBook}
                  totalChapter={totalChapter}
                  currentChapter={currentChapter}
                  updateHandler={updateHandler}
                  category={category}
                />
              )
              : null}
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
  updateHandler: PropTypes.func.isRequired,
  updateStateProps: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  editBook: PropTypes.func.isRequired,
  totalChapter: PropTypes.number.isRequired,
  currentChapter: PropTypes.number.isRequired,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Book;
