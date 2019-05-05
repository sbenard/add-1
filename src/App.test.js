import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

import { InputResult } from './App'

describe('Test InputResult component', () => {
  it('Default display', () => {
    const { getByTestId, debug } = render(<InputResult expectedResult={1234} />)
    const input = getByTestId('input-result')
    expect(input).toHaveAttribute('maxLength', '4')
    expect(input).toHaveAttribute('type', 'number')
  })

  it('On value change', () => {
    const { getByTestId } = render(<InputResult expectedResult={1234} />)
    const input = getByTestId('input-result')
    fireEvent.change(input, { target: { value: 1234 } })

    const inputSolution = getByTestId('input-solution')
    expect(inputSolution).toHaveTextContent('1234')
    expect(inputSolution).toHaveStyle('color:green')

    fireEvent.change(input, { target: { value: 1235 } })
    expect(inputSolution).toHaveStyle('color:red')
  })
})
