import React from 'react'

const InputField = function (props) {
  return (
    <fieldset>
      <label>{props.label}</label>
      <input type="text"
        value={props.value}
        onChange={props.onChange}
      />
    </fieldset>
  )
}

InputField.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default InputField
