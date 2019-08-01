import React from 'react'
import './CartControl.scss'
// 每一个控制单元持有自己的state用于动态的样式
// 对购物车的操作为redux操作
class CartControl extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props.currentFood)
    this.decreaseRef = React.createRef()
    this.countRef = React.createRef()
  }
  // function:绑定this.currentNum
  bindingNum() {
    this.props.currentCart.forEach(item => {
      if (item.name === this.props.currentFood.name)
        this.currentNum = item.count
    })
  }
  componentDidMount() {
    this.bindingNum()
    let decreaseDOM = this.decreaseRef.current
    let countDOM = this.countRef.current
    if (this.currentNum !== 0 && this.currentNum !== undefined) {
      countDOM.style.visibility = 'visible'
      decreaseDOM.style.pointerEvents = 'auto'
      decreaseDOM.style.opacity = '1'
      decreaseDOM.style.transform = 'translate3d(-0.32rem, 0, 0)'
    } else {
      countDOM.style.visibility = 'hidden'
      decreaseDOM.style.pointerEvents = 'none'
      decreaseDOM.style.opacity = '0'
      decreaseDOM.style.transform = 'translate3d(0, 0, 0)'
    }
  }
  componentDidUpdate() {
    this.bindingNum()
    if (this.currentNum === 0 || this.currentNum === undefined) {
      let decreaseDOM = this.decreaseRef.current
      let countDOM = this.countRef.current
      countDOM.style.visibility = 'hidden'
      decreaseDOM.style.pointerEvents = 'none'
      decreaseDOM.style.opacity = '0'
      decreaseDOM.style.transform = 'translate3d(0, 0, 0)'
    }
  }
  addBtn = () => {
    let decreaseDOM = this.decreaseRef.current
    let countDOM = this.countRef.current
    if (this.currentNum !== 0) {
      countDOM.style.visibility = 'visible'
      decreaseDOM.style.pointerEvents = 'auto'
      decreaseDOM.style.opacity = '1'
      decreaseDOM.style.transform = 'translate3d(-0.32rem, 0, 0)'
    }
    this.props.addCartAc(this.props.currentFood)
  }
  decreaseBtn = () => {
    if (this.currentNum == 0) return
    let decreaseDOM = this.decreaseRef.current
    let countDOM = this.countRef.current
    if (this.currentNum == 1) {
      countDOM.style.visibility = 'hidden'
      decreaseDOM.style.pointerEvents = 'none'
      decreaseDOM.style.opacity = '0'
      decreaseDOM.style.transform = 'translate3d(0, 0, 0)'
    }
    this.props.decreaseCartAc(this.props.currentFood)
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
            {this.props.currentCart.filter(item =>
              item.name === this.props.currentFood.name ? true : false
            )[0]
              ? this.props.currentCart.filter(item =>
                  item.name === this.props.currentFood.name ? true : false
                )[0].count
              : 0}
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
