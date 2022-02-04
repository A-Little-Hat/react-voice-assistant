import React, { useState } from 'react'
import Dictaphone from './Dictaphone'
import { stopDictophone } from '../Dictaphones'

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
    // {
    //   command: ['eat', 'sleep', 'leave'],
    //   callback: (command) => setMessage(`Best matching command: ${command}`),
    //   isFuzzyMatch: true,
    //   fuzzyMatchingThreshold: 0.2,
    //   bestMatchOnly: true
    // },
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
      command: [ 'Goodbye', 'bye', 'see you soon', 'tata', 'exit', 'quit', 'leave the chat', 'close', 'end', 'stop'],
      callback: () => {
        setMessage('Thanks for using Dictaphone!');
        stopDictophone();
      },
      matchInterim: true
    },
    {
      command: 'play *',
      callback: (song) => {
        window.open('http://google.com/search?q=youtube:'+song);
      }
    }
  ]

  return (
    <div>
      <h3>Dictaphone</h3>
      <p>{message}</p>
      <Dictaphone commands={commands} />
    </div>
  )
}

export default DictaphoneWidgetA