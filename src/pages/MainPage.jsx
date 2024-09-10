import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from '../components/FormComponent';
import Error from './Error';
import SinglePage from './SinglePage';

const MainPage = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FormComponent />} />
        <Route path='/single-page' element={<SinglePage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default MainPage;
