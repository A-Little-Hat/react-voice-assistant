import React, { useState } from 'react'
import Dictaphone from './Dictaphone'

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
      command: ['Hello', 'Hi', 'hey', 'howdy', 'helo', 'holla', 'hola'],
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
      command: ['eat', 'sleep', 'leave'],
      callback: (command) => setMessage(`Best matching command: ${command}`),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true
    },
    {
      command: ['clear', 'reset', 'clear'],
      callback: ({ resetTranscript }) => resetTranscript(),
      matchInterim: true
    },
  ]

  return (
    <div>
      <h3>Dictaphone A</h3>
      <p>{message}</p>
      <Dictaphone commands={commands} />
    </div>
  )
}

export default DictaphoneWidgetA