import React, { useState } from 'react'

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

export default InputResult
