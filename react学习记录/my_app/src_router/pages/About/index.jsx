import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
export default class About extends Component {
  render() {
    return (
      <div>
        <h1>我是About内容</h1>
        <Outlet></Outlet>
      </div>
    )
  }
}
