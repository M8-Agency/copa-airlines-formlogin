import React, {Component} from 'react'
import {render} from 'react-dom'

import FormLogin from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>copa-airlines-formlogin Demo</h1>
      <FormLogin/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
