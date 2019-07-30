import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'
import './takeout.scss'
import axios from '../../api/axios'
import Scroll from '../../components/Scroll/Scroll'
import Loading from '../../components/Loading/Loading'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import CartControl from './CartControl'
import BottomCart from './BottomCart'

class Takeout extends React.Component {
  constructor(props) {
    super(props)

    // this.scrollRef = React.createRef()
    this.cartbagRef = React.createRef()
    this.indexUlRef = React.createRef()
    this.indexRef = React.createRef()
    this.togetherScrollRef = React.createRef()

    this.state = {
      foodsList: [],
      bounceSet: {
        top: true,
        bottom: false,
        left: true,
        right: true
      },
      heightArr: [],
      indexNum: 0,
      loading: true
    }
  }
  componentWillMount() {
    axios.get('/foods').then(res => {
      this.setState({
        foodsList: res.data.data,
        loading: false
      })
      //
      console.log(res.data.data)
      // 计算heightArr数组
      let h = 0
      this.state.heightArr.push(h)
      this.state.foodsList.map(item => {
        h -= 26 + 18 + item.foods.length * 139
        this.state.heightArr.push(h)
      })
    })
  }
  componentDidMount() {
    if (!this.sliderSwiper) {
      this.sliderSwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        autoplay: true,
        speed: 800,
        centeredSlides: true
      })
    }
  }
  // 索引列表state值改变时触发钩子
  componentDidUpdate() {
    let indexDOM = this.indexRef.current
    indexDOM.childNodes.forEach((item, i) => {
      if (i == this.state.indexNum) {
        item.classList.add('current')
      } else {
        item.classList.remove('current')
      }
    })
  }
  wholeScroll = ({ y }) => {
    let cartbagDOM = this.cartbagRef.current
    // 吸顶元素
    console.log(y)
    if (y <= -162) {
      cartbagDOM.style.display = 'block'
    } else {
      cartbagDOM.style.display = 'none'
    }
  }
  // 联动
  togetherScroll = ({ y }) => {
    if (y > 0) return
    // 联动
    let index = 0
    for (let i = 0; i < this.state.heightArr.length; i++) {
      let height1 = this.state.heightArr[i]
      let height2 = this.state.heightArr[i + 1]
      if (!height2 || (y <= height1 && y > height2)) {
        index = i
        break
      }
    }
    if (index != this.state.indexNum) {
      this.setState({
        indexNum: index
      })
    }
  }
  // 抽离更改li样式的函数
  abstractMethod() {}
  // 点击左侧索引
  togetherClick = e => {
    let dom = e.currentTarget
    dom.parentNode.childNodes.forEach(item => {
      item.classList.remove('current')
    })
    dom.classList.add('current')
    let index = dom.getAttribute('data')
    let togetherScrollDOM = this.togetherScrollRef.current
    togetherScrollDOM.scrollTo(0, this.state.heightArr[index])
  }
  render() {
    return (
      <div className="takeout-container">
        {/* 顶部 */}
        <div className="header">
          <NavLink to="/home">
            <i className="iconfont">&#xe602;</i>
          </NavLink>
          <span>北京亨泰大厦</span>
        </div>
        {/* 整体scroll */}
        <div className="allscroll">
          <Scroll onScroll={this.wholeScroll} bounce={this.state.bounceSet}>
            <div className="allscroll-container">
              {/* banner */}
              <div className="banner">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src={require('../../assets/images/shop/lb1.png')}
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src={require('../../assets/images/shop/lb2.png')}
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src={require('../../assets/images/shop/lb3.png')}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 卡包 */}
              <div className="cartbag">
                <span>
                  卡包<i>3</i>张
                </span>
              </div>
              {/* 卡包(吸顶) */}
              <div className="cartbag-abs" ref={this.cartbagRef}>
                <span>
                  卡包<i>3</i>张
                </span>
              </div>
              {/* 菜品列表 */}
              <div className="content">
                {/* 左侧列表 */}
                <div className="menu-wrapper">
                  <Scroll>
                    <ul ref={this.indexRef}>
                      {this.state.foodsList.map((item, index) => {
                        return (
                          <li
                            data={index}
                            key={index}
                            className="menu-item"
                            onClick={e => this.togetherClick(e)}
                          >
                            <span>{item.name}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </Scroll>
                </div>
                {/* 右侧列表 */}
                <div className="foods-wrapper">
                  <Scroll
                    stopPropagation={true}
                    onScroll={this.togetherScroll}
                    ref={this.togetherScrollRef}
                  >
                    <ul>
                      {/* repeat */}
                      {this.state.foodsList.map((item, index) => {
                        return (
                          <li key={index} className="food-list">
                            <h1>{item.name}</h1>
                            <ul>
                              {item.foods.map((itemm, indexx) => {
                                return (
                                  <li key={indexx} className="food-item">
                                    <div className="item-img">
                                      <img src={itemm.image} alt="" />
                                    </div>
                                    <div className="item-desc">
                                      <h2>{itemm.name}</h2>
                                      <div className="price">
                                        <span>￥{itemm.price}</span>
                                      </div>
                                      <CartControl />
                                    </div>
                                  </li>
                                )
                              })}
                            </ul>
                          </li>
                        )
                      })}
                    </ul>
                  </Scroll>
                </div>
              </div>
            </div>
          </Scroll>
          {/* 购物车 */}
          <BottomCart />
        </div>
        {/* loading */}
        <Loading title="Loading..." show={this.state.loading} />
      </div>
    )
  }
}

export default Takeout
