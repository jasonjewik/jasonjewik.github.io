import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPreview = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___index, order: DESC }, limit: 3) {
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
  `)

  const { edges: posts } = data.allMdx

  return (
    <>
      <div>
        <h1>Latest Blog Posts</h1>
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
        <div style={{ textAlign: 'center' }}>
          <Link to="blog">
            <h4 style={{ textDecoration: 'underline' }}>Older Articles</h4>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogPreview
