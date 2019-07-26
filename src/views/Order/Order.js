import React from 'react'
import './order.scss'
import Scroll from '../../components/Scroll/Scroll'

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <Scroll>
          <ul className="order-container">
            <li>order1</li>
            <li>order2</li>
            <li>order3</li>
          </ul>
        </Scroll>
      </div>
    )
  }
}

export default Order
