import React from 'react'
import './BottomCart.scss'
import CartControl from './CartControl'
import Scroll from '../../components/Scroll/Scroll'

class BottomCart extends React.Component {
  constructor(props) {
    super(props)
    this.listRef = React.createRef()
  }
  componentDidMount() {
    let listDOM = this.listRef.current
    // TO HERE!!! 这里要设置listDOM的height值。超出4个订单项目时设置为固定的2rem，未超过则不修改。
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
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
                <li className="food">
                  <span>1元葡式蛋挞</span>
                  <div className="price">
                    <span>￥33</span>
                  </div>
                  <CartControl />
                </li>
              </ul>
            </Scroll>
          </div>
        </div>
      </div>
    )
  }
}
export default BottomCart
