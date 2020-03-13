import React from 'react'
import './scss/index.scss'

export const Button = ({ label, onClick = () => { } }) => (
  <div className='button' onClick={onClick}>
    <p>{label}</p>
  </div>
)