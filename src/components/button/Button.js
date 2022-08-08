import React from 'react'

export default function Button(props) {
  return (
    <div className={props.styled}>
      <button>{props.text}</button>
    </div>
  )
}
