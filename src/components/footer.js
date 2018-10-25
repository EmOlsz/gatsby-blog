import React from 'react';
import { Link } from 'gatsby';

export default () => (
    <footer className="gatsby__footer">
      <div className="gatsby__footer-credits-container">
        <span className="gatsby__footer-credits">Written with &hearts; by ITSG Global 2018</span>
      </div>
      <div className="gatsby__footer-nav">
          <Link className="gatsby__footer-link" to={`/`}>Home</Link>
          <Link className="gatsby__footer-link" to={`/about`}>About</Link>
          <Link className="gatsby__footer-link" to={`/contact`}>Contact</Link>
      </div>
    </footer>
)