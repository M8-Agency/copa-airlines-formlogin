import React, {Component} from 'react'
import {render} from 'react-dom'

import FormLogin from '../../src'

class Demo extends Component {
  
  handleLoginSuccess = (response) => {
    console.log('handleLoginSuccess')
  }

  handleLoginError = (response) => {
    console.log('handleLoginError')
  } 

  render() {
    return <div>
      <h1>copa-airlines-formlogin Demo</h1>
      <FormLogin 
        working= { false }
        success = { this.handleLoginSuccess }
        error = { this.handleLoginError }
        />      
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
