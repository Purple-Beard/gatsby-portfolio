import * as React from "react"
import "../styles/layout.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 70px 15vw;

  h1 {
    margin-bottom: 30px;
  }
`

const NotFoundPage = () => {
  return (
    <Layout>
      <Main
        className="section--wrapper"
      >
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
        </p>
        
      </Main>
    </Layout>
  )
}

export const Head = () => <Seo title="Page not Found" />

export default NotFoundPage