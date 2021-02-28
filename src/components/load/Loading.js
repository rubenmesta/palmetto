import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center">
             <div className="spinner-grow" role="status"></div>
             <div className="spinner-grow" role="status"></div>
             <div className="spinner-grow" role="status"></div>
             <div className="spinner-grow" role="status"></div>
        </div>
     )
    }
  }
