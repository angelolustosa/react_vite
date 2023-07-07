import { useState } from 'react'
import './App.css'

function App() {
  const [sobrenome, setSobrenome] = useState('Lustosa')
  const [nomeBotao, setNomeBotao] = useState('Morfar!')


const morfar = () => {
  setSobrenome(sobrenome.toUpperCase())
  setNomeBotao('Desmorfar!')
}
  /* let sobrenome = 'Lustosa'
  sobrenome.toUpperCase() */

  return (
    <>
     <h1>Angelo</h1>
     <div>{sobrenome}</div>
     <button type="button" onClick={morfar}>{nomeBotao}</button>
    </>
  )
}

export default App
