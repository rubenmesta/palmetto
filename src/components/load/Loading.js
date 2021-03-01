import React, { Component } from 'react'
import './loading.scss';

export default class Loading extends Component {
  render() {
    return (

      <div className="spinner">
          <div className="d-flex justify-content-center">
              <div className="spinner-grow" role="status"></div>
              <div className="spinner-grow" role="status"></div>
              <div className="spinner-grow" role="status"></div>
              <div className="spinner-grow" role="status"></div>
          </div>
        </div>
     )
    }
  }
