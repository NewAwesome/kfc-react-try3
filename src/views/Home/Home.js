import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'
import './home.scss'
import sign from '../../assets/images/sign.png'
import Scroll from '../../components/Scroll/Scroll'
// 引入swiper
import Swiper from 'swiper'
// 必须这样引入。。。？？？是的！
import 'swiper/dist/css/swiper.min.css'

import axios from '../../api/axios.js'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Loading from '../../components/Loading/Loading'

class Home extends React.Component {
  constructor(props) {
    super(props)

    // React 16.3+
    this.spiritPagi1Ref = React.createRef()
    this.spiritPagi2Ref = React.createRef()
    this.orderAbsRef = React.createRef()
    this.scrollRef = React.createRef()
    this.toTopRef = React.createRef()

    this.state = {
      refreshScroll: false,
      // 雪碧图滚动方向
      spiritDir: 'horizontal',
      // 雪碧图页码
      spiritPagi: true,
      // // homelist数组
      homeList: [],
      // loading状态
      loading: true
    }
  }
  componentWillMount() {
    // 请求数据
    axios.get('/home').then(res => {
      this.setState({
        homeList: res.data.data,
        loading: false
      })
    })
  }
  componentDidMount() {
    if (!this.sliderSwiper) {
      this.sliderSwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        autoplay: true,
        speed: 800,
        slidesPerView: 1.2,
        centeredSlides: true,
        disableOnInteraction: false,
        spaceBetween: 15
      })
    }
  }
  // 监听scroll，雪碧图页码
  changeSpiritPagi = ({ x }) => {
    let spiritPagi1DOM = this.spiritPagi1Ref.current
    let spiritPagi2DOM = this.spiritPagi2Ref.current
    if (x < 0) {
      spiritPagi1DOM.style.display = 'none'
      spiritPagi2DOM.style.display = 'block'
    } else {
      spiritPagi2DOM.style.display = 'none'
      spiritPagi1DOM.style.display = 'block'
    }
  }
  // 监听home竖直方向scroll
  homeScroll = ({ y }) => {
    let orderAbsDOM = this.orderAbsRef.current
    let toTopDOM = this.toTopRef.current
    if (y < -230) {
      orderAbsDOM.style.display = 'block'
    } else {
      orderAbsDOM.style.display = 'none'
    }
    // 改变toTop标志
    if (y < 0) {
      toTopDOM.style.display = 'block'
    } else {
      toTopDOM.style.display = 'none'
    }
    // lazyload监听scroll滚动
    forceCheck()
  }
  //
  toTopMani = () => {
    let scrollDOM = this.scrollRef.current
    scrollDOM.toTop()
  }
  render() {
    return (
      <div className="container">
        <Scroll onScroll={this.homeScroll} ref={this.scrollRef}>
          {/* 容器 */}
          <div className="scroll-container">
            {/* 顶部部分 */}
            <div className="top">
              {/* 位置栏 */}
              <div className="pos">
                <div className="pos-touch">
                  <NavLink to="/city">晋中市</NavLink>
                  <i className="iconfont">&#xe773;</i>
                </div>
                <div className="pos-right">
                  <img src={sign} alt="" />
                  <i className="iconfont">&#xe633;</i>
                  <i className="iconfont">&#xe608;</i>
                </div>
              </div>
              {/* 金币栏 */}
              <div className="gold">
                <div className="gold-count">
                  <a>
                    我的
                    <img alt="" src={require('../../assets/images/V.png')} />金
                  </a>
                  <h2>3196</h2>
                </div>
                <ul className="gold-btn">
                  <li>
                    <img
                      alt=""
                      src={require('../../assets/images/huiyuanma.png')}
                    />
                    <span>会员码</span>
                  </li>
                  <li>
                    <img
                      alt=""
                      src={require('../../assets/images/kabao.png')}
                    />
                    <span>卡包</span>
                  </li>
                  <li>
                    <img
                      alt=""
                      src={require('../../assets/images/youhuiquan.png')}
                    />
                    <span>优惠券</span>
                  </li>
                  <li>
                    <img
                      alt=""
                      src={require('../../assets/images/shenqianbao.png')}
                    />
                    <span>神钱包</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* 内容部分 */}
            <div className="content">
              {/* 预定按钮 */}
              <div className="delivery">
                <NavLink to="/takeout">
                  <img
                    alt=""
                    src={require('../../assets/images/waisongdiancan.png')}
                  />
                </NavLink>
                <img
                  alt=""
                  src={require('../../assets/images/zizhudiancan.png')}
                />
              </div>
              {/* 雪碧滚动图 */}
              <div className="spirit">
                <Scroll
                  direction={this.state.spiritDir}
                  onScroll={this.changeSpiritPagi}
                >
                  <ul className="spirit-ul">
                    <li>
                      <img
                        alt=""
                        src={require('../../assets/images/kfg.png')}
                      />
                      <span>K咖啡馆</span>
                    </li>
                    <li>
                      <img
                        alt=""
                        src={require('../../assets/images/dsk.png')}
                      />
                      <span>大神卡</span>
                    </li>{' '}
                    <li>
                      <img alt="" src={require('../../assets/images/ze.png')} />
                      <span>周二会员日</span>
                    </li>{' '}
                    <li>
                      <img
                        alt=""
                        src={require('../../assets/images/hylf.png')}
                      />
                      <span>会员量贩</span>
                    </li>{' '}
                    <li>
                      <img
                        alt=""
                        src={require('../../assets/images/mrms.png')}
                      />
                      <span>每日秒杀</span>
                    </li>{' '}
                    <li>
                      <img alt="" src={require('../../assets/images/ze.png')} />
                      <span>会员公益</span>
                    </li>{' '}
                    <li>
                      <img
                        alt=""
                        src={require('../../assets/images/dsk.png')}
                      />
                      <span>HI上校</span>
                    </li>{' '}
                    <li>
                      <img
                        alt=""
                        src={require('../../assets/images/kdzj.png')}
                      />
                      <span>口袋炸鸡店</span>
                    </li>{' '}
                    <li>
                      <img
                        alt=""
                        src={require('../../assets/images/lpk.png')}
                      />
                      <span>礼品卡</span>
                    </li>{' '}
                    <li>
                      <img
                        alt=""
                        src={require('../../assets/images/xsm.png')}
                      />
                      <span>小书迷王国</span>
                    </li>{' '}
                    <li>
                      <img alt="" src={require('../../assets/images/km.png')} />
                      <span>K-Music</span>
                    </li>{' '}
                    <li>
                      <img
                        alt=""
                        src={require('../../assets/images/lpk.png')}
                      />
                      <span>K-Run</span>
                    </li>{' '}
                    <li>
                      <img
                        alt=""
                        src={require('../../assets/images/kdzj.png')}
                      />
                      <span>附近门店</span>
                    </li>
                  </ul>
                </Scroll>
                <div className="spirit-pagi">
                  <div className="pagi1" ref={this.spiritPagi1Ref} />
                  <div className="pagi2" ref={this.spiritPagi2Ref} />
                </div>
              </div>
              {/* 大轮播图 */}
              <div className="content-banner">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src={require('../../assets/images/banner3.png')}
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src={require('../../assets/images/banner2.png')}
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src={require('../../assets/images/banner4.png')}
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src={require('../../assets/images/banner1.png')}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 内容列表 */}
              <div className="content-list">
                {/* repeat */}
                {this.state.homeList.map((item, index) => {
                  return (
                    <div key={index} className="content-li">
                      <div className="li-title">
                        <div className="stripe" />
                        <span>{item.name}</span>
                        <div className="stripe" />
                      </div>
                      <div className="img-bg">
                        <LazyLoad>
                          <img src={item.bgImg} alt="" />
                        </LazyLoad>
                      </div>
                      <div className="li-banner">
                        <Scroll direction={this.state.spiritDir}>
                          <ul
                            className="li-banner-ul"
                            style={{
                              width: item.smImgs.length * 1.44 - 0.09 + 'rem'
                            }}
                          >
                            {item.smImgs.map((itemm, indexx) => {
                              return (
                                <li key={indexx}>
                                  <div className="img-sm">
                                    <LazyLoad>
                                      <img src={itemm} alt="" />
                                    </LazyLoad>
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </Scroll>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Scroll>
        {/* 下拉一定距离后出现的绝对定位下单按钮 */}
        <div className="order-abs" ref={this.orderAbsRef}>
          <div className="waisong">
            <img src={require('../../assets/images/orderLeft.png')} alt="" />
            <div className="txt-container">
              <span>外送点餐</span>
            </div>
          </div>
          <div className="stripe" />
          <div className="zizhu">
            <div className="txt-container">
              <span>自助点餐</span>
            </div>
            <img src={require('../../assets/images/orderRight.png')} alt="" />
          </div>
        </div>
        {/* to top */}
        <div className="to-top" ref={this.toTopRef} onClick={this.toTopMani}>
          <img src={require('../../assets/images/toTop.png')} alt="" />
        </div>
        {/* loading */}
        <Loading title="Loading..." show={this.state.loading} />
      </div>
    )
  }
}

export default Home
