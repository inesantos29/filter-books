import React from 'react';

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Books from '../Books/Books';
import Footer from '../Footer/Footer';

const Home = ({ match }) => (
  <>
    <Navbar />
    <Header title="ReactJS" />
    <Books />
    <Footer />
    {match && match.params.testRouting && (
      <p>
        {match.params.testRouting}
      </p>
    )}
  </>
);


export default Home;
