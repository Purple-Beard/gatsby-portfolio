import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 70px 15vw;

  div {
    margin-top: 30px;

    h3 {
      color: #ECB20D;
      margin-bottom: 15px;
    }

    ul li {
      margin-left: 20px;
    }
  }
`

const Experience = () => {
  return (
    <Section
      className='section--wrapper'
      id='experience'
    >
      <h2>Relevant Experience</h2>
      <div>
        <h3>Experience 1</h3>
        <ul>
          <li>velit euismod in pellentesque massa placerat duis ultricies</li>
          <li>velit euismod in pellentesque massa placerat duis ultricies</li>
          <li>velit euismod in pellentesque massa placerat duis ultricies</li>
        </ul>
      </div>
      <div>
        <h3>Experience 2</h3>
          <ul>
            <li>velit euismod in pellentesque massa placerat duis ultricies</li>
            <li>velit euismod in pellentesque massa placerat duis ultricies</li>
            <li>velit euismod in pellentesque massa placerat duis ultricies</li>
          </ul>
      </div>
      <div>
        <h3>Experience 3</h3>
          <ul>
            <li>velit euismod in pellentesque massa placerat duis ultricies</li>
            <li>velit euismod in pellentesque massa placerat duis ultricies</li>
            <li>velit euismod in pellentesque massa placerat duis ultricies</li>
          </ul>
      </div>
    </Section>
  )
}

export default Experience