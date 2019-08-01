import React from 'react'
import './BottomCart.scss'
import CartControl from './CartControl'
import Scroll from '../../components/Scroll/Scroll'

class BottomCart extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props)
    this.listRef = React.createRef()
  }
  componentDidMount() {}
  componentWillUpdate() {
    let listDOM = this.listRef.current
    // TO HERE!!! 这里要设置listDOM的height值。超出4个订单项目时设置为固定的2rem，未超过则不修改。
    if (this.props.currentCart.length >= 4) {
      listDOM.style.height = '2rem'
    }
  }
  render() {
    return (
      <div className="bottom-cart-container">
        <div className="shopping-cart">
          <i className="iconfont">&#xe7d6;</i>
          <span>3</span>
        </div>
        <div className="shopping-total">
          <span>合计：</span>
          <span>￥1.00</span>
        </div>
        <div className="shopping-submit">
          <button>提交订单</button>
        </div>
        {/* 抽屉订单详情 */}
        <div className="shopping-list">
          <div className="shopping-list-header">
            <h1>购物车</h1>
            <span>清空</span>
          </div>
          <div className="shopping-list-content" ref={this.listRef}>
            <Scroll>
              <ul>
                {this.props.currentCart.map(food => {
                  return (
                    <li className="food">
                      <span>{food.name}</span>
                      <div className="price">
                        <span>￥{food.total}</span>
                      </div>
                      <CartControl
                        currentFood={food}
                        currentCart={this.props.currentCart}
                        addCartAc={this.props.addCartAc}
                        decreaseCartAc={this.props.decreaseCartAc}
                        clearCartAc={this.props.clearCartAc}
                      />
                    </li>
                  )
                })}
              </ul>
            </Scroll>
          </div>
        </div>
      </div>
    )
  }
}
export default BottomCart
