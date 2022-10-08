'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.png'
import './index.less'
class Search extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      Text:null
    }
  }
  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
  }
  render() {
    const {Text} = this.state
    return <div className='search-text'>
      {
        Text ? <Text/> : null
      }
      <img src={logo} onClick={this.loadComponent.bind(this)}></img>
      Search Text搜索文字的内容1</div>
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)