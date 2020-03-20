import React from 'react';
import {CopyRight} from './style';

const Footer = () => (

  <CopyRight>
    <footer className="text-center">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="mr-2">&copy; 2020</span>
              <a
                href="https://github.com/inesantos29/"
                className="mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inês Catana
              </a>
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </CopyRight>
);

export default Footer;
