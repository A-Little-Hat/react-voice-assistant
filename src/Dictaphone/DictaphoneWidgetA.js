import React, { useState } from 'react'
import Dictaphone from './Dictaphone'
import { stopDictophone } from '../app/Dictaphones'
import { Container } from 'react-bootstrap'

import '../styles/dictaphoneWidgetA.css'

const DictaphoneWidgetA = () => {
  const [message, setMessage] = useState('')
  const commands = [
    {
      command: 'what is weather in *',
      callback: (city) => {
        setMessage(`Weather in ${city} is nice`)
      }
    },
    {
      command: ['Hello', 'Hi', 'hey', 'howdy', 'helo', 'holla', 'hola', 'hai', 'hii', 'hoo'],
      callback: () => setMessage(`Hi there!`),
      matchInterim: true
    },
    {
      command: 'open *',
      callback: (site) => {
        let regex = /(^[A-Za-z0-9]+.(com|org|co|net)$)/m
        if (regex.exec(site)) {
          window.open('https://' + site);
        } else {
          window.open('https://www.' + site + '.com');
        }
      },
    },
    {
      command: ['clear', 'reset', 'clear'],
      callback: ({ resetTranscript }) => resetTranscript(),
      matchInterim: true
    },
    {
      command: 'my name is *',
      callback: (name) => setMessage(`Hi ${name}!`),
      matchInterim: true
    },
    {
      command: ['Goodbye', 'bye', 'see you soon', 'tata', 'exit', 'quit', 'leave the chat', 'close', 'end', 'stop'],
      callback: () => {
        setMessage('Thanks for using Dictaphone!');
        stopDictophone();
      },
      matchInterim: true
    },
    {
      command: 'play *',
      callback: (song) => {
        window.open('http://google.com/search?q=youtube:' + song);
      }
    },
    {
      command: ['what is *'],
      callback: (query) => {
        window.open('http://google.com/search?q=what is '+ query);
      }
    },
    {
      command: ['who is *'],
      callback: (query) => {
        window.open('http://google.com/search?q=who is '+ query);
      }
    },
    {
      command: ['what is the *'],
      callback: (query) => {
        window.open('http://google.com/search?q=what is the '+ query);
      }
    },
    {
      command: ['how do *'],
      callback: (query) => {
        window.open('http://google.com/search?q=how do '+ query);
      }
    },
    {
      command: ['how to *'],
      callback: (query) => {
        window.open('http://google.com/search?q=how to '+ query);
      }
    },
  ]

  return (
    <Container>
      <h1 className='center' >Dictaphone</h1>
      <p>{message}</p>
      <Dictaphone commands={commands} />
    </Container>
  )
}

export default DictaphoneWidgetA