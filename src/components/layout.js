import * as React from "react"
import "../styles/layout.css"
import styled from "styled-components"
import { Link } from "gatsby"

const Navbar = styled.nav`
  background-color: #F6F7F1;
  min-width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  -webkit-box-shadow: 0px 2.98px 7.46px 0px rgba(41, 24, 46, 0.1);
  -moz-box-shadow: 0px 2.98px 7.46px 0px rgba(41, 24, 46, 0.1);
  box-shadow: 0px 2.98px 7.46px 0px rgba(41, 24, 46, 0.1);

  ul {
    display: flex;
    list-style: none;
    gap: 30px;

    a {
      color: #436B2C;
      font-weight: 500;
      letter-spacing: 1px;
      transition: ease 0.2s;

      :hover {
        color: #F14C36;
      }
    }
  }
`

const Layout = ({children}) => {
  return (
    <>
      <Navbar>
        <Link className="logo" to="/">Full Name.</Link>
        <ul>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#experience">Experience</Link></li>
          <li><Link to="/#work">Work</Link></li>
          <li><Link to="/#contact" className="cta--button">Contact</Link></li>
        </ul>
      </Navbar>
      {children}
    </>
  )
}

export default Layout