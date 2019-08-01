import { combineReducers } from 'redux'
import * as ActionTypes from './actionTypes'
/**
 * reducer就是一个纯函数，接收旧的state和action，返回新的state
 */

//需要存储的初始状态数据
const initialState = {
  // count: 0,
  // price: 0,
  goods: []
}
//拆分Reducer
function goods(goods = initialState.goods, action) {
  switch (action.type) {
    case ActionTypes.ADD_CART:
      return updateGood(goods, action.good, 0)
    case ActionTypes.DECREASE_CART:
      return updateGood(goods, action.good, 1)
    case ActionTypes.CLEAR_CART:
      return updateGood(goods, action.good, 2)
    default:
      return goods
  }
}
/**
 * 功能函数
 */
function updateGood(prevGoods, newGood, flag) {
  let rs = []
  if (flag === 0) {
    // add
    let isExist = false
    rs = prevGoods.map(good => {
      if (good.name === newGood.name) {
        isExist = true
        return Object.assign({}, good, {
          count: good.count + 1,
          total: good.total + good.price
        })
      } else {
        return good
      }
    })
    if (!isExist) {
      rs = [
        ...rs,
        {
          name: newGood.name,
          count: 1,
          price: newGood.price,
          total: newGood.price
        }
      ]
    }
  } else if (flag === 1) {
    // decrease ui界面决定了不会发生无商品触发decrease事件
    let index = -1
    rs = prevGoods.map((good, i) => {
      console.log(good)
      if (good.name === newGood.name) {
        if (good.count === 1) {
          index = i
          return good
        } else
          return Object.assign({}, good, {
            count: good.count - 1,
            total: good.total - good.price
          })
      }
      return good
    })
    if (index !== -1) {
      // 移除
      rs.splice(index, 1)
    }
  } else {
    // clear
    rs = []
  }
  return rs
}
//合并Reducer
const reducer = combineReducers({
  goods
})

export default reducer
