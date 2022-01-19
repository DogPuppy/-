import React, { Component } from 'react'
import list from './index.module.css'
export default class List extends Component {
  render() {
    const { items, isFirst, isLoading, err } = this.props
    return (
      <div className={list.outer}>
        {
          isFirst?<h2>输入关键子随后点击搜索</h2>:
          isLoading?<h2>正在加载。。。请稍后</h2>:
          err?<h2>{err}</h2>:
          items.map((item) => {
            return (
              <div className={list.wrapper} key={item.id}>
                <a href={item.html_url} target='_blank' rel="noreferrer">
                  <img className={list.pic} src={item.avatar_url} alt="pic" />
                </a>
                <p>{item.login}</p>
              </div>
            )
          })}
      </div>
    )
  }
}
