import React, { useState, useEffect } from 'react'
import './App.css'

import { fillData, increment } from './utils'

export const InputResult = ({ expectedResult }) => {
  const [isResultVisible, setResultVisibility] = useState(false)
  const [value, setValue] = useState('')
  const onResultChange = ({ target }) => {
    setValue(+target.value)
    if (target.value.length === 4) {
      setResultVisibility(true)
    }
  }

  const isCorrect = expectedResult === value
  const color = isCorrect ? 'green' : 'red'
  return (
    <>
      <input
        data-testid="input-result"
        type="number"
        placeholder="Valeur"
        maxLength={4}
        value={value}
        onChange={onResultChange}
      />
      {isResultVisible && (
        <p data-testid="input-solution" style={{ color }}>
          {expectedResult}
        </p>
      )}
    </>
  )
}

let intervalID
function App() {
  const [rowsNumber, setRows] = useState(3)
  const [values, setValues] = useState(fillData(rowsNumber))
  const [visible, setVisibility] = useState(true)
  const [timer, setTimer] = useState(3)

  let resultArea = []
  if (!visible) {
    for (let i = 0; i < rowsNumber; i++) {
      resultArea.push(
        <div key={`result-${i}`}>
          <InputResult expectedResult={+increment(values[i])} />
        </div>
      )
    }
  }

  useEffect(() => {
    if (intervalID) {
      setVisibility(true)
      setValues(fillData(rowsNumber))
      clearTimeout(intervalID)
    }

    intervalID = setTimeout(() => {
      setVisibility(false)
    }, timer * 1000)
  }, [timer, rowsNumber])

  return (
    <div className="App">
      <label>
        Rows :
        <input
          value={rowsNumber}
          type="number"
          onChange={({ target }) => {
            if (target.value > 0) setRows(+target.value)
          }}
        />
      </label>
      <label>
        Interval :
        <input
          value={timer}
          type="number"
          onChange={({ target }) => {
            if (target.value > 0) setTimer(+target.value)
          }}
        />
      </label>
      {visible && (
        <ul>
          {values &&
            values.map((result, index) => <li key={index}>{result}</li>)}
        </ul>
      )}
      {resultArea}
    </div>
  )
}

export default App
