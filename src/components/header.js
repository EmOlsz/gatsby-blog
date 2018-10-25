import React from 'react';
import { Link } from 'gatsby';

export default ({ logoTitle }) => (
  <header className="gatsby__header">
    <div className="gatsby__header-logo-container">
      <Link className="gatsby__header-logo" to={`/`}>{logoTitle}</Link>
    </div>
    <nav className="gatsby__header-nav">
      <Link className="gatsby__header-link" to={`/`}>Home</Link>
      <Link className="gatsby__header-link" to={`/about`}>About</Link>
      <Link className="gatsby__header-link" to={`/contact`}>Contact</Link>
    </nav>
  </header>
)