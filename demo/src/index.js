import React, {Component} from 'react'
import {render} from 'react-dom'

import FormLogin from '../../src'

class Demo extends Component {
  
  handleLoginSuccess = (response) => {
    console.log(response)
  }

  handleLoginError = (error, data) => {
    console.log(error)
  } 

  render() {
    return <div>
      <h1>copa-airlines-formlogin Demo</h1>
      <FormLogin 
        endPoint= {`/user/login`}
        loginSuccess = { this.handleLoginSuccess }
        loginError = { this.handleLoginError }
        />      
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
