import React, { useState, useEffect } from 'react'
import './App.css'

import InputResult from './InputResult'
import { fillData, increment } from '../libs/utils'

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
    <div className="pa3 ma3 center bg-white shadow-2 w-50 App">
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
        <ul className="list">
          {values &&
            values.map((result, index) => <li key={index}>{result}</li>)}
        </ul>
      )}
      {resultArea}
    </div>
  )
}

export default App
