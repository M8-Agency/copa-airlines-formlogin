# copa-airlines-formlogin

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Describe copa-airlines-formlogin here.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

npm install copa-airlines-formlogin

```js
import React, {Component} from 'react'
import {render} from 'react-dom'

import FormLogin from '../../src'

class Demo extends Component {
  
  handleWorking = (status) => {
    console.log(status);
  }

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
        working= { this.handleWorking }
        success = { this.handleLoginSuccess }
        error = { this.handleLoginError }
        />      
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
```