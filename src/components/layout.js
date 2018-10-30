import React from 'react';
import { StaticQuery, graphql } from "gatsby";

import Header from './header';
import Footer from './footer';
import '../styles/style.scss';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
              title
          }
        }
      }
    `}
    render={data => (
      <div className="gatsby">
        <Header logoTitle={data.site.siteMetadata.title} />
        <main className="gatsby__main-content">
          <div className="gatsby__container">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    )}
  />
)