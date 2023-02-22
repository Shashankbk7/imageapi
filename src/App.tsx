import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import ImageGrid from './components/ImageGrid/ImageGrid';
import ImageInformation from './components/ImageInformation/ImageInformation';
import ErrorPage from './components/ErrorPage/ErrorPage';


const App = () =>{

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ImageGrid />} />
      <Route path='/:id' element={<ImageInformation />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
