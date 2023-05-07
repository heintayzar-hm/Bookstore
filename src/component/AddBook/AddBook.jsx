import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DropDown from './dropdown';

// eslint-disable-next-line react/prefer-stateless-function
class AddBook extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      author: '',
      title: '',
      category: { id: 1, name: 'Action' },
    };
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  dropdownChangeHandler = (value) => {
    this.setState((prevState) => ({
      ...prevState,
      category: value,
    }));
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { addBook } = this.props;
    const { title, author, category } = this.state;
    if (title.trim() && author.trim()) {
      addBook(title, author, category.name);
      this.setState({
        author: '',
        title: '',
        category: '',
      });
    }
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { author, title } = this.state;
    const { categories } = this.props;
    if (categories.length === 0) {
      return <></>;
    }
    return (
      <>
        <article data-testid="form-container">
          <h2 className="font-important tracking-wider text-[1.25rem] font-bold text-[#888] uppercase pb-3 ">Add New Book</h2>
          <form onSubmit={this.submitHandler} className=" gap-4 grid grid-cols-1 sm:grid-cols-12">
            <input className="dark:bg-black dark:text-white sm:col-span-3 p-2 px-3 border focus:outline-none rounded focus:border-blue border-solid tracking-widest text-brown" name="title" onChange={this.changeHandler} data-testid="book-title-input" type="text" placeholder="Book Title" value={title} required />
            <input className=" dark:bg-black dark:text-white sm:col-span-3 p-2 px-3 border focus:outline-none rounded focus:border-blue border-solid tracking-widest text-brown" name="author" onChange={this.changeHandler} data-testid="author-title-input" type="text" placeholder="Author" value={author} required />
            <div className="sm:col-span-4"><DropDown changeHandler={this.dropdownChangeHandler} currentSelectName={categories[0]} categories={categories} /></div>
            <button className="sm:col-span-2 p-3 bg-blue text-white rounded hover:bg-white hover:text-blue" type="submit">Add Book</button>
          </form>
        </article>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  // specify which state data to provide to the component
  categories: state.categories,
});

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
  categories: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
};
export default connect(mapStateToProps)(AddBook);
