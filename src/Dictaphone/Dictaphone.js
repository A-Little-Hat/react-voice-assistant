import React, { useState, useEffect } from 'react'
import { useSpeechRecognition } from '../SpeechRecognition'
import { Container, Row, Col } from 'react-bootstrap'

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
    <Container>
      <Row>
        <Col>
          <Row>
            <span>listening: {listening ? 'on' : 'off'}</span>
          </Row>
          <Row>
            <span>transcribing: {transcribing ? 'on' : 'off'}</span>
          </Row>
          <Row>
            <span>clearTranscriptOnListen: {clearTranscriptOnListen ? 'on' : 'off'}</span>
          </Row>
        </Col>
      </Row>
      <Row>
        <button onClick={resetTranscript}>Reset</button>
        <button onClick={toggleTranscribing}>Toggle transcribing</button>
        <button onClick={toggleClearTranscriptOnListen}>Toggle clearTranscriptOnListen</button>
      </Row>
      <Row>
        <span>{transcript}</span>
      </Row>
    </Container>
  )
}

export default Dictaphone