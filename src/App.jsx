import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/layout/Layout';
import BooksPage from './pages/BookPage';
import CategoriesPage from './pages/CategoriesPage';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super();
    this.props = props;
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
export default App;
