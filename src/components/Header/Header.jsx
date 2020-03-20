import React from 'react';
import PropTypes from 'prop-types';
import { Hero } from './style';

const Header = ({ title }) => (
  <Hero>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img
            src="/img/react-logo.png"
            className="img-fluid react-logo"
            alt="react-logo"
          />
          <div className="intro-text">
            <span className="name">{title}</span>
            <hr className="line-light" />
            <span className="skills">Thinking in React exercise</span>
          </div>
        </div>
      </div>
    </div>
  </Hero>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
