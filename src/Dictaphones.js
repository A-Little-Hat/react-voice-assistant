import React from 'react'
import { DictaphoneWidgetA } from './Dictaphone'
import SpeechRecognition from './SpeechRecognition'

export const stopDictophone = () => SpeechRecognition.stopListening();
export const listenContinuously = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-IN'
  })

export default () => {
  

  return (
    <DictaphoneWidgetA />
  )
}
