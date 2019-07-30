import { combineReducers } from 'redux'
import * as ActionTypes from './actionTypes'
/**
 * reducer就是一个纯函数，接收旧的state和action，返回新的state
 */

//需要存储的初始状态数据
const initialState = {
  totalNum: 0,
  totalPrice: 0,
  goodsList: []
}
//拆分Reducer
function addCart(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_CART:
      return Object.assign({}, state, {
        goodsList: addCartFn(action.good),
        totalNum: state.totalNum + 1
      })
    default:
      return state
  }
}
// function decreaseCart(song = initialState.song, action) {
//   switch (action.type) {
//     case ActionTypes.CHANGE_SONG:
//       return action.song
//     default:
//       return song
//   }
// }
// function clearCart(songs = initialState.songs, action) {
//   switch (action.type) {
//     case ActionTypes.SET_SONGS:
//       return action.songs
//     case ActionTypes.REMOVE_SONG_FROM_LIST:
//       return songs.filter(song => song.id !== action.id)
//     default:
//       return songs
//   }
// }

// functions
function addCartFn(good) {}

//合并Reducer
const reducer = combineReducers({
  // showStatus
  // song,
  // songs
})

export default reducer
