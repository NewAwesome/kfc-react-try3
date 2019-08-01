import { connect } from 'react-redux'
import { addCart, decreaseCart, clearCart } from '../redux/actions'
import Takeout from '../views/Takeout/Takeout'

// 映射Redux的全局state到组件的props上（用于获取redux的state，or监听）
const mapStateToProps = state => ({
  currentCart: state.goods
})
// 映射dispatch到props上
const mapDispatchToProps = dispatch => ({
  addCartAc: good => {
    dispatch(addCart(good))
  },
  decreaseCartAc: good => {
    dispatch(decreaseCart(good))
  },
  clearCartAc: () => {
    dispatch(clearCart())
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Takeout)
