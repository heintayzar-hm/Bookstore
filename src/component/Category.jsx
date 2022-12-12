import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clickCheckStatus } from '../redux/categories/categoriesReducer';

// eslint-disable-next-line react/prefer-stateless-function
class Category extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler() {
    const { dispatch } = this.props;
    dispatch(clickCheckStatus());
  }

  render() {
    const { categories } = this.props;
    return (
      <>
        { categories ? `${categories}` : null}
        <div>
          <button data-testid="check-status" onClick={this.buttonHandler} type="button">Check Status</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  // specify which state data to provide to the component
  categories: state.categories,
});

Category.propTypes = {
  dispatch: PropTypes.func.isRequired,
  categories: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
};
export default connect(mapStateToProps)(Category);
