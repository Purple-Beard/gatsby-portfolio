import * as React from 'react'
import { graphql } from 'gatsby'
import "../styles/layout.css"
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from 'styled-components'

const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 70px 15vw;

  h1 {
    margin-bottom: 30px;
  }
  ul {

    h2 {
      color: #ECB20D;
      margin-bottom: 10px;
    }
    div {
      color: #436B2C;
      font-weight: 500;
      margin-bottom: 5px;
    }
  }
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Main
        className='section--wrapper'
      >
        <h1>Blogs</h1>
        <ul>
          {
            data.allMdx.nodes.map((node) => (
              <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <div
                  role='doc-subtitle'
                >
                  Posted: {node.frontmatter.date}
                </div>
                <p>{node.excerpt}</p>
              </article>
            ))
          }
        </ul>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage