import { GlobalStyle } from 'GlobalStyle';
import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    isRefreshing ? <Loader /> :
    (<div>
      <Suspense fallback={<Loader />}>
      <Routes>
          <Route path="/" element={<Navigation />} >
            <Route index element={<h1>Welcome!</h1>} />
              <Route path="/contacts" element={
                <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
              }/>
              <Route path="/login" element={
                <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
              } />
              <Route path="/register" element={
                <RestrictedRoute component={<RegisterPage />} redirectTo="/contacts" />
              } />
        </Route>
      </Routes>
      </Suspense>
      <GlobalStyle />
    </div>)
  )
}

export default App;