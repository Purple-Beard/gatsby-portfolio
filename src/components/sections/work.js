import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 70px 15vw;
  div {
    display: flex;
    gap: 15px;
    a {
      transition: ease 0.2s;
      :hover {
        transform: translateY(-5px);
      }
      article {
      margin-top: 30px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        h3 {
          color: #ECB20D;
        }
        p {
          margin-top: 15px;
        }
      }
    }
  }
`

const Work = () => {
  return (
    <Section
      className='section--wrapper'
      id='work'
    >
      <h2>Personal Projects</h2>
      <div>
        <a href='/'>
          <article>
            <h3>Project A</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
        </a>
        <a href='/'>
          <article>
            <h3>Project B</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
        </a>
        <a href='/'>
          <article>
            <h3>Project C</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
        </a>
      </div>
    </Section>
  )
}

export default Work