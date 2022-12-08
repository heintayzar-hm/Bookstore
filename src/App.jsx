import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
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
        <Header />
        <Routes>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/*" element={<BooksPage />} />
        </Routes>
      </>
    );
  }
}
export default App;
