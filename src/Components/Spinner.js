import React, { Component } from 'react'
import spinnerGif from "./Spinner.gif"

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={spinnerGif} alt="Spinner" />
      </div>
    )
  }
}

export default Spinner
