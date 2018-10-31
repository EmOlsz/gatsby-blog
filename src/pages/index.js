import React from "react"
import { Link, graphql } from "gatsby";

import Layout from '../components/Layout';

export default ({ data }) => {
  const recentPostCounter = 3;

  return (
    <Layout>
      <div className="home">
        <div className="home__newest">
          <div className="home__heading">
            <span>Newest posts</span>
          </div>
          <div className="home__content">
            <ul className="home__newest-list">
              {data.allMarkdownRemark.edges.slice(0, recentPostCounter).map(({node}) => (
                <li className="home__newest-list-element" key={node.id}>
                  <Link className="home__newest-list-element-anchor" to={node.fields.slug}>
                    <div className="home__newest-list-element-title">{node.frontmatter.title}</div>
                    <div className="home__newest-list-element-excerpt">{node.excerpt}</div>
                    <img className="home__newest-list-element-image" src={node.frontmatter.imgurl} alt="img" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="gatsby__divider" />
        <div className="home__post">
          <div className="home__heading">
            <span>All posts ({data.allMarkdownRemark.totalCount})</span>
          </div>
          <div className="home__content">
            <ul className="home__post-list">
              {data.allMarkdownRemark.edges.map(({node}) => (
                <li className="home__post-list-element" key={node.id}>
                  <Link className="home__post-list-element-anchor" to={node.fields.slug}>
                    <div className="home__post-list-element-details">
                      <span className="home__post-list-element-title">{node.frontmatter.title}</span>
                      <span className="home__post-list-element-date gatsby__underline">{node.frontmatter.date}</span>
                    </div>
                    <div className="home__post-list-element-excerpt">{node.excerpt}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            imgurl
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