import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'

const Blog = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <>
      <div style={{ marginBottom: '4rem' }}>
        <SEO title="Blog" />
        <h1>My Blog</h1>
        {posts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={post.fields.slug}>
              <h2 style={{ marginBottom: '0.25em' }}>
                {post.frontmatter.title}
              </h2>
            </Link>
            <p style={{ marginBottom: '0.5em' }}>
              <strong>
                {post.frontmatter.date} -- {post.timeToRead}{' '}
                {post.timeToRead > 1 ? 'minutes' : 'minute'} read
              </strong>
            </p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { fields: frontmatter___index, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`

export default Blog
