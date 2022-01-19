import React, { Component } from 'react'
import axios from 'axios'
import search from './index.module.css'
export default class Search extends Component {
  search = () => {
    let { keyWordElement: { value: keyWord } } = this
    this.props.updateAppState({isFirst:false,isLoading:true})
    axios({
      method: 'GET',
      url: 'https://api.github.com/search/users',
      params: { q: keyWord }
    }).then((response) => {
      this.props.updateAppState({items:response.data.items,isLoading:false})
    }).catch((error) => {
      this.props.updateAppState({err:error.message,isLoading:false})
    })
  }
  render() {
    return (
      <div className={search.wrapper}>
        <div>Search information from GitHub</div>
        <input ref={c => this.keyWordElement = c} className={search.input} type="text" placeholder='请输入关键词搜索' />
        <button className={search.search} onClick={this.search}>搜索</button>
      </div>
    )
  }
}
