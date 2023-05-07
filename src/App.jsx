import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from './component/layout/Layout';
import BooksPage from './pages/BookPage';
import CategoriesPage from './pages/CategoriesPage';
import { getCategories } from './redux/actions/categories';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.getAllCategories = this.getAllCategories.bind(this);
  }

  componentDidMount() {
    this.getAllCategories();
  }

  getAllCategories() {
    const { dispatch } = this.props;
    dispatch(getCategories());
  }

  render() {
    return (
      <>
        <Layout>
          <Routes>
            <Route path="/books" element={<BooksPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/*" element={<BooksPage />} />
          </Routes>
        </Layout>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  // specify which state data to provide to the component
  categories: state.categories,
});

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
