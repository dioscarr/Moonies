import React, { useState, useContext } from 'react';
import { db } from '../store/storeSettings';
import { getInitialMode } from '../utility/Locals';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="HomePage" >
        <span className="moonies">
          <span>M</span>
          <span>o</span>
          <span>o</span>
          <span>n</span>
          <span>i</span>
          <span>e</span>
          <span>z</span>
          <span>e</span>
        </span>
      </div>
    </div>
  );
}

export default Home;
