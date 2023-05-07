import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddCategory from './Category/AddCategory';
import { newCategory } from '../redux/actions/categories';
// eslint-disable-next-line react/prefer-stateless-function
class Categories extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.addCategory = this.addCategory.bind(this);
  }

  addCategory(name) {
    const { dispatch } = this.props;
    dispatch(newCategory(name));
  }

  render() {
    const { categories } = this.props;
    return (
      <>
        <ul className="grid gap-5 md:grid-cols-7 lg:grid-cols-10 grid-cols-[repeat(auto-fit,minmax(100px,_1fr))] my-5 mx-[5%]">
          {
          categories.map((category) => (
            <li key={category.id} className="overflow-hidden bg-blue px-3 py-2 text-white rounded">{category.name}</li>
          ))
          }
        </ul>
        <AddCategory addCategory={this.addCategory} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  // specify which state data to provide to the component
  categories: state.categories,
});

Categories.propTypes = {
  dispatch: PropTypes.func.isRequired,
  categories: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
};
export default connect(mapStateToProps)(Categories);
