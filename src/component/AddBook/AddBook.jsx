import React from 'react';
import PropTypes from 'prop-types';
import DropDown from './dropdown';

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
          <h2 className="font-important tracking-wider text-[1.25rem] font-bold text-[#888] uppercase pb-3 ">Add New Book</h2>
          <form onSubmit={this.submitHandler} className=" gap-4 grid grid-cols-1 sm:grid-cols-12">
            <input className="dark:bg-black dark:text-white sm:col-span-3 p-2 px-3 border focus:outline-none rounded focus:border-blue border-solid tracking-widest text-brown" name="title" onChange={this.changeHandler} data-testid="book-title-input" type="text" placeholder="Book Title" value={title} required />
            <input className=" dark:bg-black dark:text-white sm:col-span-3 p-2 px-3 border focus:outline-none rounded focus:border-blue border-solid tracking-widest text-brown" name="author" onChange={this.changeHandler} data-testid="author-title-input" type="text" placeholder="Author" value={author} required />
            <div className="sm:col-span-4"><DropDown /></div>
            <button className="sm:col-span-2 p-3 bg-blue text-white rounded" type="submit">Add Book</button>
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
