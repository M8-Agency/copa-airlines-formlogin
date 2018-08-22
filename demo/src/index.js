import React, {Component} from 'react'
import {render} from 'react-dom'

import FormLogin from '../../src'

class Demo extends Component {
  
  handleWorking = (status) => {
    console.log(status);
  }

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
        working= { this.handleWorking }
        success = { this.handleLoginSuccess }
        error = { this.handleLoginError }
        />      
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
