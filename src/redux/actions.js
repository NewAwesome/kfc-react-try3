import * as ActionTypes from './actionTypes'
/**
 * Action是把数据从应用传到store的有效载荷。它是store数据的唯一来源
 */
//Action创建函数，用来创建action对象。使用action创建函数更容易被移植和测试
// export function showPlayer(showStatus) {
//   return { type: ActionTypes.SHOW_PLAYER, showStatus }
// }
export function addCart(good) {
  return { type: ActionTypes.ADD_CART, good }
}
export function decreaseCart(good) {
  return { type: ActionTypes.DECREASE_CART, good }
}
export function clearCart() {
  return { type: ActionTypes.CLEAR_CART }
}
