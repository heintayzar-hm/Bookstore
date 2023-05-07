import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class AddCategory extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
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
    const { addCategory } = this.props;
    const { name } = this.state;
    if (name.trim()) {
      addCategory(name);
      this.setState({
        name: '',
      });
    }
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { name } = this.state;
    return (
      <>
        <article data-testid="form-container" className="py-5 px-10">
          <h2 className="font-important tracking-wider text-[1.25rem] font-bold text-[#888] uppercase pb-3 ">Add New Category</h2>
          <form onSubmit={this.submitHandler} className=" gap-4 grid grid-cols-1 sm:grid-cols-12 ">
            <input className="dark:bg-black dark:text-white sm:col-span-3 p-2 px-3 border focus:outline-none rounded focus:border-blue border-solid tracking-widest text-brown" name="name" onChange={this.changeHandler} data-testid="category-input" type="text" placeholder="Category Name" value={name} required />
            <button className="sm:col-span-2 p-3 bg-blue text-white rounded hover:bg-white hover:text-blue" type="submit">Add Category</button>
          </form>
        </article>
      </>
    );
  }
}

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};
export default AddCategory;
