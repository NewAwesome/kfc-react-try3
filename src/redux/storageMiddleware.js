import * as ActionTypes from "./actionTypes"
import localStorage from "../util/storage"

/**
 * 本地存储中间件
 */
const storage = store => next => action => {
  let result = next(action);
  switch (action.type) {
    case ActionTypes.ADD_CART:
      localStorage.setCurrentSong(store.getState.goods.map(good => {
        if (good.name === action.good.name) {
          isExist = true
          rs = Object.assign({}, good, {
            count: good.count + 1,
            total: good.total + good.price
          })
        }
      }));
      break;
    case ActionTypes.DECREASE_CART:
      localStorage.setSongs(store.getState().songs);
      break;
    case ActionTypes.CLEAR_CART:
      let newSongs = store.getState().songs.filter(song => song.id !== action.id);
      localStorage.setSongs(newSongs);
      break;
    default:
  }
  return result;
}

export default storage
