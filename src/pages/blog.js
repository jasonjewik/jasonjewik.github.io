import React from 'react'
import { Link, graphql } from 'gatsby'

const Blog = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <>
      <div>
        <h1>All Blog Posts</h1>
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

export const pagesQuery = graphql`
  query {
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
