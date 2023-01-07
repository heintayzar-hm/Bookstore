import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/layout/Layout';
import BooksPage from './pages/BookPage';
import CategoriesPage from './pages/CategoriesPage';
import SignUp from './pages/Singup';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setIsSignedIn(true);
  //     } else {
  //       setIsSignedIn(false);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);
  return (
    (isSignedIn)
      ? (
        <>
          <Layout>
            <Routes path="/">
              <Route index path="books" element={<BooksPage />} />
              <Route path="categories" element={<CategoriesPage />} />
            </Routes>
          </Layout>
        </>
      )
      : (
        <Routes path="/">

          <Route path="signUp" element={<SignUp isSignIn={false} />} />
          <Route path="signIn" element={<SignUp isSignIn />} />

        </Routes>
      )

  );
};
export default App;
