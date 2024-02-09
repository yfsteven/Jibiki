import React, { useEffect } from 'react'
import Header from '../components/Header'
import Page from '../components/Page'

function App() {
  const fetchData = async () => {
    const res = await fetch("https://sakura-paris.org/dict/?api=1&q=携帯&dict=広辞苑&type=0&romaji=1", { mode: 'no-cors'});
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  )
}

export default App
