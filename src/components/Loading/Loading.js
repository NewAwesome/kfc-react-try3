import React from 'react'
import loadingImg from './loading.gif'
import './Loading.scss'

// 接收两个props。1. show "bool",为true表示显示loading
// 2. title "string",表示loading显示的文字
class Loading extends React.Component {
  render() {
    let displayStyle =
      this.props.show === true ? { display: '' } : { display: 'none' }
    return (
      <div className="loading-container" style={displayStyle}>
        <div className="loading-wrapper">
          <img src={loadingImg} width="18px" height="18px" alt="loading" />
          <div className="loading-title">{this.props.title}</div>
        </div>
      </div>
    )
  }
}
export default Loading
