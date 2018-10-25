import React from "react"
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <div className="home">
      <div className="home__post-counter">
        {data.allMarkdownRemark.totalCount}
        <span>&nbsp;posts</span>
      </div>
      <div className="home__post-list-container">
        <ul className="home__post-list">
          {data.allMarkdownRemark.edges.map(({node}) => (
            <li className="home__post-list-element" key={node.id}>
              <Link className="home__post-list-element-anchor" to={node.fields.slug}>
                <div className="home__post-list-element-details">
                  <span className="home__post-list-element-title">{node.frontmatter.title}</span>
                  <span>,</span>
                  <span className="home__post-list-element-date">{node.frontmatter.date}</span>
                </div>
                <div className="home__post-list-element-excerpt">{node.excerpt}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          id
        }
      }
      totalCount
    }
  }
`;