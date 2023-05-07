/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import { connect } from 'react-redux';
import DropDown from '../AddBook/dropdown';
import AddProgress from './AddProgress';
// eslint-disable-next-line react/prefer-stateless-function
class EditBook extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = { ...props };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { editHandler, updateHandler } = this.props;
    const { title, author } = this.state;
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Do you really want to update the book?')) {
      return;
    }
    if (title.trim() && author.trim()) {
      editHandler(this.state);
      updateHandler(-1);
      this.setState({
        author: '',
        title: '',
        category: [],
        currentChapter: 0,
        totalChapter: 0,
      });
    }
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      if (e.target.name === 'currentChapter' || e.target.name === 'totalChapter') {
        return ({
          ...prevState,
          [e.target.name]: +(e.target.value),
        });
      }
      return ({
        ...prevState,
        [e.target.name]: e.target.value,
      });
    });
  }

  dropdownChangeHandler = (value) => {
    this.setState((prevState) => ({
      ...prevState,
      category: [value.name],
    }));
  }

  render() {
    const {
      id, title, author, category, currentChapter, totalChapter,
    } = this.state;
    const { removeBook, updateHandler, categories } = this.props;
    return (
      <>
        <div className="fixed z-50 inset-0 transparent-bg overflow-scroll">
          <button type="button" onClick={() => updateHandler(-1)} className="absolute right-8 top-3">
            <AiFillCloseCircle className="w-8 h-8" />
          </button>
          <form onSubmit={this.submitHandler}>
            <h2 className="font-important tracking-wider text-[1.25rem] font-bold text-white text-center p-6 pb-3 text-3xl">
              Editing Book:
              {' '}
              {title}
            </h2>
            <div className="grid grid-cols-1 p-5 gap-11">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-5">
                  <span className="font-important text-gray-50 text-xl font-semibold">Title</span>
                  <input className="dark:bg-black dark:text-white p-2 px-3 border focus:outline-none rounded focus:border-blue border-solid tracking-widest text-brown" name="title" id="title" onChange={this.changeHandler} data-testid="book-title-input" type="text" placeholder="Book Title" value={title} required />
                </div>
                <div className="grid grid-cols-1 gap-5">
                  <span className="font-important text-gray-50 text-xl font-semibold">Author</span>
                  <input id="author" className=" dark:bg-black dark:text-white p-2 px-3 border focus:outline-none rounded focus:border-blue border-solid tracking-widest text-brown" name="author" onChange={this.changeHandler} data-testid="author-title-input" type="text" placeholder="Author" value={author} required />
                </div>
              </div>
              <div className="">
                <span className="font-important tracking-wider text-[1.25rem] font-bold text-white uppercase pb-3 ">Add Genre</span>
                <div className="grid grid-cols-10 pt-5 p-3">
                  <div className="col-span-9">
                    <DropDown
                      changeHandler={this.dropdownChangeHandler}
                      currentSelectName={categories.find((cat) => cat.name === category[0])}
                      categories={categories}
                    />
                  </div>
                  <button type="button" className="col-span-1" onClick={this.addHandler}>ADD</button>
                </div>
              </div>
              <div>
                <span className="font-important tracking-wider text-[1.25rem] font-bold text-white uppercase pb-3 ">Optional</span>
                <AddProgress
                  totalChapter={totalChapter}
                  currentChapter={currentChapter}
                  fromUpdateSection={false}
                  changeHandler={this.changeHandler}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <button className="p-3 bg-blue text-white rounded hover:bg-white hover:text-blue" type="submit">Edit Book</button>
                <button className="p-3 bg-blue text-white rounded hover:bg-white hover:text-blue" type="button" onClick={() => removeBook(id)}>Delete Book</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  // specify which state data to provide to the component
  categories: state.categories,
});
EditBook.propTypes = {
  removeBook: PropTypes.func.isRequired,
  editHandler: PropTypes.func.isRequired,
  updateHandler: PropTypes.func.isRequired,
  categories: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
};
export default connect(mapStateToProps)(EditBook);
