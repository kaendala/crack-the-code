import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const LearnRoutes = React.lazy(() => import('learnroutes/LearnRoutes'));
const Videogames = React.lazy(() => import('videogames/Videogames'));

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<LearnRoutes />} />
      <Route path="/routes" element={<LearnRoutes />} />
      <Route path="/videogames" element={<Videogames />} />
    </Routes>
    <Footer />
  </>
);

export default App;
