import React from 'react'
import reactLogo from './assets/react.svg'
import Header from '../components/Header'
import Page from '../components/Page'

function App() {
  const [japaneseWordData, switchToAnotherJapaneseWord] = React.useState({
      word: "",
      definition: "",
      url: ""
  })

  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  )
}

export default App
