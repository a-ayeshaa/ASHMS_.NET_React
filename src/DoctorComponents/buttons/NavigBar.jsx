import React from 'react'

export const NavigBar = () => {
  return (
    <fieldset style={{ margin: "10px" }}>
      <b>
        <a href='/doctor/appointments'> Home ||</a>
      </b>
      <b>
        <a href='/doctor/profile'> Profile </a>
      </b>
    </fieldset>
  )
}

