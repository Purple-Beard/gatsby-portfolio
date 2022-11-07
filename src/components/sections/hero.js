import * as React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 70px 15vw;
  
  h1 {
    margin-top: 15px;
  }
  h2 {
    color: #ECB20D;
  }
  p {
    margin: 30px 0;
  }
  a {
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`
const Subtitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 5px;
`

const Hero = () => {
  let timeOfDay
  const date = new Date()
  const hours = date.getHours()

  if (hours >= 1 && hours < 12) {
    timeOfDay = 'morning'
  } else if ( hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'evening'
  }

  return (
    <Main
      className='section--wrapper'
      id='/'
    >
      <Subtitle
        role='doc-subtitle'
      >
        Good {timeOfDay}, my name is
      </Subtitle>
      <h1>Full Name</h1>
      <h2>I'm a Developer</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et diam diam. Integer sed vulputate urna, eu facilisis tellus. Phasellus dapibus, sapien ac ornare ultrices, odio arcu rutrum lacus, in tincidunt nunc augue at ex.</p>
      <a
        className='cta--button'
        href='/'
      >
        Resume
      </a>
    </Main>
  )
}

export default Hero