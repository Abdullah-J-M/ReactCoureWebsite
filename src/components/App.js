import React from 'react';
import Homepage from './Homepage';
import Aboutpage from './Aboutpage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';

const App = () => {
  const getPage = () => {
    const route = window.location.pathname;
    if (route === '/courses') return <CoursesPage />;
    if (route === '/about') return <Aboutpage />;
    return <Homepage />;
  };
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
};

export default App;
