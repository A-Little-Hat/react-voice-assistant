import React from 'react'
import { DictaphoneWidgetA } from './Dictaphone'
import SpeechRecognition from './SpeechRecognition'
export const stopDictophone = () => SpeechRecognition.stopListening();

export default () => {
  
  const listenContinuously = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-IN'
  })

  return (
    <div>
      <DictaphoneWidgetA />
      <button onClick={listenContinuously}>Listen</button>
      <button onClick={stopDictophone}>Stop</button>
    </div>
  )
}
