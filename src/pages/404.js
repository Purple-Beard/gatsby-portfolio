import * as React from "react"
import "../styles/layout.css"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="section--wrapper">
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
        </p>
        
      </main>
    </Layout>
  )
}

export const Head = () => (
  <title>Error 404 - Not found</title>
)

export default NotFoundPage