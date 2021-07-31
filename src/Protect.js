import React, { Component } from 'react'

import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

class App extends Component {
  render() {
    return (
      <Protect sha512='EE26B0DD4AF7E749AA1A8EE3C10AE9923F618980772E473F8819A5D4940E0DB27AC185F8A0E1D5F84F88BC887FD67B143732C304CC5FA9AD8E6F57F50028A8FF'>
        <div>Content</div>
      </Protect>
    )
  }
}