import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './Scroll.scss'
import common from '../../util/common'

class Scroll extends React.Component {
  constructor(props) {
    super(props)
    this.scrollViewRef = React.createRef()
  }
  componentDidMount() {
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.scrollViewRef.current, {
        scrollX: this.props.direction === 'horizontal',
        scrollY: this.props.direction === 'vertical',
        // 实时派发scroll事件
        probeType: 3,
        click: this.props.click
      })
      // 按照传入的参数决定是否对外开放滚动监听。this.props.onScroll就是外部传进来的事件处理函数
      if (this.props.onScroll) {
        this.bScroll.on('scroll', scroll => {
          this.props.onScroll(scroll)
        })
      }
    }
  }
  componentDidUpdate() {
    // 组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    if (this.bScroll && this.props.refresh === true) {
      this.bScroll.refresh()
    }
  }
  componentWillUnmount() {
    this.bScroll.off('scroll')
    this.bScroll = null
  }
  refresh() {
    if (this.bScroll) {
      this.bScroll.refresh()
    }
  }
  toTop() {
    if (this.bScroll) {
      this.bScroll.scrollTo(0, 0, 700)
    }
  }
  render() {
    return (
      <div className="scroll-view" ref={this.scrollViewRef}>
        {/* 获取子组件 */}
        {this.props.children}
      </div>
    )
  }
}

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null
}

// 使用prop-types规范props的类型
Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  click: PropTypes.bool,
  refresh: PropTypes.bool,
  onScroll: PropTypes.func
}

export default Scroll
