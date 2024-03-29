import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Experience from "../components/sections/experience"
import Work from "../components/sections/work"
import Contact from "../components/sections/contact"


const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Layout>
  )
}

export const Head = () => <Seo title="Profile" />

export default IndexPage