import React from 'react'
import './CartControl.scss'
// 每一个控制单元持有自己的state用于动态的样式
// 对购物车的操作为redux操作
class CartControl extends React.Component {
  constructor(props) {
    super(props)
    this.decreaseRef = React.createRef()
    this.countRef = React.createRef()
    this.state = {
      // 表示本控制元素的商品数量
      num: 0
    }
  }
  addBtn = () => {
    let decreaseDOM = this.decreaseRef.current
    let countDOM = this.countRef.current
    if (this.state.num == 0) {
      countDOM.style.visibility = 'visible'
      decreaseDOM.style.opacity = '1'
      decreaseDOM.style.transform = 'translate3d(-0.32rem, 0, 0)'
    }
    this.setState(prevState => ({
      num: prevState.num + 1
    }))
  }
  decreaseBtn = () => {
    if (this.state.num == 0) return
    let decreaseDOM = this.decreaseRef.current
    let countDOM = this.countRef.current
    if (this.state.num == 1) {
      countDOM.style.visibility = 'hidden'
      decreaseDOM.style.opacity = '0'
      decreaseDOM.style.transform = 'translate3d(0, 0, 0)'
    }
    this.setState(prevState => ({
      num: prevState.num - 1
    }))
  }
  render() {
    return (
      <div className="cart-control-wrapper">
        <div className="cart-control">
          {/* 控制css属性 transform和opacity */}
          <div
            className="cart-decrease"
            ref={this.decreaseRef}
            onClick={this.decreaseBtn}
            opacity="0"
          >
            <img
              width="15px"
              height="15px"
              src={require('../../assets/images/jian.png')}
              alt=""
            />
          </div>
          {/* 控制display */}
          <div className="cart-count" ref={this.countRef}>
            {this.state.num}
          </div>
          <div className="cart-add" onClick={this.addBtn}>
            <img
              width="15px"
              height="15px"
              src={require('../../assets/images/add.png')}
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}
export default CartControl
