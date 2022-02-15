import React, { useState, useEffect } from 'react'
import { useSpeechRecognition } from '../core/SpeechRecognition'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

import '../styles/dictophone.css'
import { stopDictophone, listenContinuously } from '../app/Dictaphones'

const Dictaphone = ({ commands }) => {
  const [transcribing, setTranscribing] = useState(true)
  const [clearTranscriptOnListen, setClearTranscriptOnListen] = useState(true)
  const toggleTranscribing = () => setTranscribing(!transcribing)
  const toggleClearTranscriptOnListen = () => setClearTranscriptOnListen(!clearTranscriptOnListen)
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition({ transcribing, clearTranscriptOnListen, commands })
  useEffect(() => {
    if (interimTranscript !== '') {
      console.log('Got interim result:', interimTranscript)
    }
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript)
    }
  }, [interimTranscript, finalTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>No browser support</span>
  }

  if (!isMicrophoneAvailable) {
    return <span>Please allow access to the microphone</span>
  }

  return (
    <>
    <Stack bsPrefix="vstack">
      <Stack bsPrefix="hstack">
          <div>listening: {listening ? 'on' : 'off'}</div>
          <div>transcribing: {transcribing ? 'on' : 'off'}</div>
          <div>clearTranscriptOnListen: {clearTranscriptOnListen ? 'on' : 'off'}</div>
      </Stack>
      <Stack bsPrefix="hstack" >
        <Button variant="danger" onClick={resetTranscript}>Reset</Button>
        <Button variant="outline-warning" onClick={toggleTranscribing}>Toggle transcribing</Button>
        <Button variant="outline-warning" onClick={toggleClearTranscriptOnListen}>Toggle clearTranscriptOnListen</Button>
      </Stack>
      <Stack bsPrefix="hstack" >
      <div>{transcript}</div>
      </Stack>
      <Stack bsPrefix="hstack" >
      <Button onClick={listenContinuously}>Listen</Button>
      <Button onClick={stopDictophone}>Stop</Button>
    </Stack>
    </Stack>
    </>
  )
}

export default Dictaphone