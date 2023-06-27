import React from 'react';
import { Routes, Route } from 'react-router-dom';

const LearnRoutes = React.lazy(() => import('learnroutes/LearnRoutes'));
const Videogames = React.lazy(() => import('videogames/Videogames'));

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<LearnRoutes />} />
      <Route path="/routes" element={<LearnRoutes />} />
      <Route path="/videogames" element={<Videogames />} />
    </Routes>
  </>
);

export default App;
