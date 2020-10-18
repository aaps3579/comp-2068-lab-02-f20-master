import React from 'react';
import Header from '../shared/Header/index'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <Header title={"React Router App"} />
      <Link to="/about" style={{ paddingLeft: '2em', color: '#2c3e50', marginTop: '0.5em', display: 'block' }}>About</Link>
    </>
  );
}

export default Home;