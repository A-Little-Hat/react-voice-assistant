import React from 'react'
import { DictaphoneWidgetA } from '.'
import SpeechRecognition from '../core/SpeechRecognition'
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
