import React, { Component } from 'react'

export default class EmptyCart extends Component {
  render() {
    return (
      <div className='container mt-5'>
      <div className='row'>
      <div className="col-10 mx-aut0 text-center text-title">
      <h1>your cart is currently empty</h1>
      </div>
      </div>  
      </div>
    )
  }
}
