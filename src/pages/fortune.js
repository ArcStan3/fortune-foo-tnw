import React from 'react'
import { connector } from '../store'

import InputField from '../components/input-field'
import BasicButton from '../components/basic-button'
import Card from '../components/card'

const FortunePage = function (props) {
  return (
    <div>
      <header>
        <h1>Fortune Teller 2042</h1>
      </header>
      <main>
        <form onSubmit={e => {
          e.preventDefault()

          props.predict(
            props.tempAge,
            props.tempInitial,
            props.tempColor
          )
        }}>
          <InputField label="Age"
            value={props.tempAge}
            onChange={e => props.update('tempAge', e.target.value)}
          />
          <InputField
            value={props.tempInitial}
            onChange={e => props.update('tempInitial', e.target.value)}
            label="First Initial of First Name" />
          <InputField
            value={props.tempColor}
            onChange={e => props.update('tempColor', e.target.value)}
            label="Eye Color" />
          <BasicButton />
        </form>
        <div>
          <Card title="Fortune" image={props.fortune ? "http://lorempixel.com/300/200/nature" : null}>
            {props.fortune}
          </Card>
        </div>
      </main>
    </div>
  )
}

export default connector(FortunePage)
