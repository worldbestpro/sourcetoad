import React from 'react'
import Button from './Button'

const Keypad = (props) => {
  const { actionToPerform, allClear } = props

  const numericKeys = [7, 8, 9, 4, 5, 6, 1, 2, 3]

  const operatorKeys = [
    { label: '÷', value: '/' },
    { label: '×', value: 'x' },
    { label: '-', value: '-' },
    { label: '+', value: '+' },
    { label: '=', value: '=' },
  ]

  const functionKeys = [
    { label: allClear ? 'AC' : 'C', value: allClear ? 'AC' : 'C' },
    { label: '±', value: '+/-' },
    { label: '%', value: '%' },
  ]

  const lastRowKeys = [
    {
      label: '0',
      value: '0',
      type: 'numeric',
      buttonStyle: 'numeric-key special',
    },
    { label: '·', value: '.', type: 'fx', buttonStyle: 'numeric-key' },
  ]

  const handleClickButton = (value, keyType) => {
    actionToPerform(value, keyType)
  }

  return (
    <div id="keypad" className="flex row jc-sp-around">
      <div className="grid">
        {functionKeys.map((functionKey) => (
          <Button
            type="fx"
            buttonStyle="fx-key"
            key={functionKey.label}
            label={functionKey.label}
            value={functionKey.value}
            onClick={handleClickButton}
          />
        ))}
        {numericKeys.map((numericKey) => (
          <Button
            type="numeric"
            buttonStyle="numeric-key"
            key={numericKey}
            label={numericKey}
            value={numericKey}
            onClick={handleClickButton}
          />
        ))}
        {lastRowKeys.map((lastRowKey) => (
          <Button
            key={lastRowKey.label}
            label={lastRowKey.label}
            value={lastRowKey.value}
            buttonStyle={lastRowKey.buttonStyle}
            type={lastRowKey.type}
            onClick={handleClickButton}
          />
        ))}
      </div>
      <div className="flex column jc-sp-btw">
        {operatorKeys.map((operatorKey) => (
          <Button
            type="operator"
            buttonStyle="op-key"
            key={operatorKey.label}
            label={operatorKey.label}
            value={operatorKey.value}
            onClick={handleClickButton}
          />
        ))}
      </div>
    </div>
  )
}

export default Keypad
