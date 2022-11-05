import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 70px 15vw;

  form {
    margin-top: 30px;
    display: block;

    input,
    textarea {
      background: none;
      padding: 10px;
      border: 2px solid rgb(41, 24, 46, 0.1);
      border-radius: 10px;
      width: 100%;
      line-height: 24px;
    }

    button {
      display: block;
      margin-left: auto;
      margin-top: 15px;
    }

    div {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;

      input {
        width: 49%;
      }
    }
  }
`

const Contact = () => {
  return (
    <Section
      className='section--wrapper'
      id='contact'
    >
      <h2>Get in Touch</h2>
      <form 
        action='https://getform.io/f/5ceba29b-094d-44f1-a601-0d25c6304804'
        method='POST'
      >
        <div>
          <input 
            type='text'
            name='name'
            placeholder='e.g. John Doe'
            required
          />
          <input 
            type='email'
            name='email'
            placeholder='e.g. johndoe@email.com'
            required
          />
        </div>
        <textarea 
          rows='3'
          placeholder='Enter your Message'
          name='textfield'
          required
        />
        <button
          type='submit'
          className='cta--button'
        >
          Submit
        </button>
      </form>
    </Section>
  )
}

export default Contact