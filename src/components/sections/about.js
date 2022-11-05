import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 70px 15vw;

  div {
    margin-top: 30px;
  }
`

const About = () => {
  return (
    <Section
      className='section--wrapper'
      id='about'
    >
      <h2>About Me</h2>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nulla facilisi etiam dignissim diam quis. Lectus urna duis convallis convallis tellus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque.</p>
        <p>Aenean euismod elementum nisi quis eleifend quam. Faucibus et molestie ac feugiat. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Habitant morbi tristique senectus et netus et malesuada. Volutpat blandit aliquam etiam erat.</p>
      </div>
    </Section>
  )
}

export default About