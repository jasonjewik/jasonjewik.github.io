import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'

const Blog = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <>
      <div style={{ marginBottom: '4rem' }}>
        <SEO title="Blog" />
        <h1>Blog Posts</h1>
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
        <h1>My Recent Reads</h1>
        <div style={{ marginTop: '2.175rem', marginBottom: '4rem' }}>
          <ul>
            <li>"Weapons of Math Destruction" by Cathy O'Neil</li>
            <li>
              "The Uninhabitable Earth: Life After Warming" by David
              Wallace-Wells
            </li>
            <li>
              "Human Compatible: Artificial Intelligence and the Problem of
              Control" by Stuart Russell
            </li>
            <li>"Fascism: A Warning" by Madeleine Albright</li>
            <li>"Utopia for Realists" by Rutger Bregman</li>
          </ul>
        </div>
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
