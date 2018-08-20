import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <span style={{ margin: '5px' }}>Home</span>
      </Link>
      <Link to="/grades">
        <span style={{ margin: '5px' }}>Grades</span>
      </Link>
      <Link to="/finances">
        <span style={{ margin: '5px' }}>Finances</span>
      </Link>
    </div>
  );
};

export default MainMenu;