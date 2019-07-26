import React from 'react'
import './home.scss'
import sign from '../../assets/images/sign.png'
import Scroll from '../../components/Scroll/Scroll'
// 引入swiper
import Swiper from 'swiper'
// 必须这样引入。。。？？？是的！
import 'swiper/dist/css/swiper.min.css'

// import axios from '../../api/axios.js'

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
      spiritPagi: true
      // // homelist数组
      // homeList: []
    }
  }
  // componentWillMount() {
  //   // 请求数据
  //   axios.get('/homeList').then(res => {
  //     this.setState({
  //       homeList: res.data.data
  //     })
  //   })
  // }
  componentDidMount() {
    if (!this.sliderSwiper) {
      this.sliderSwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        autoplay: true,
        speed: 800,
        slidesPerView: 1.2,
        centeredSlides: true,
        disableOnInteraction: false,
        pagination: '.swiper-pagination',
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
                  <a>晋中市</a>
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
                <img
                  alt=""
                  src={require('../../assets/images/waisongdiancan.png')}
                />
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
                  <div className="swiper-pagination" />
                </div>
              </div>
              {/* 内容列表 */}
              <div className="content-list">
                {/* repeat */}
                <div className="content-li">
                  <div className="li-title">
                    <div className="stripe" />
                    <span>美味尝鲜</span>
                    <div className="stripe" />
                  </div>
                  <img
                    src={require('../../assets/images/sy/美味尝鲜1.png')}
                    alt=""
                  />
                  <div className="li-banner">
                    <Scroll direction={this.state.spiritDir}>
                      <ul className="li-banner-ul">
                        <li>
                          <img
                            src={require('../../assets/images/sy/美味尝鲜2.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/美味尝鲜3.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/美味尝鲜4.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/美味尝鲜5.png')}
                            alt=""
                          />
                        </li>
                      </ul>
                    </Scroll>
                  </div>
                </div>
                {/* repeat */}
                <div className="content-li">
                  <div className="li-title">
                    <div className="stripe" />
                    <span>WOW会员</span>
                    <div className="stripe" />
                  </div>
                  <img
                    src={require('../../assets/images/sy/WOW会员1.png')}
                    alt=""
                  />
                  <div className="li-banner">
                    <Scroll direction={this.state.spiritDir}>
                      <ul className="li-banner-ul">
                        <li>
                          <img
                            src={require('../../assets/images/sy/WOW会员2.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/WOW会员3.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/WOW会员4.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/WOW会员5.png')}
                            alt=""
                          />
                        </li>
                      </ul>
                    </Scroll>
                  </div>
                </div>
                {/* repeat */}
                <div className="content-li">
                  <div className="li-title">
                    <div className="stripe" />
                    <span>商城 会员量贩</span>
                    <div className="stripe" />
                  </div>
                  <img
                    src={require('../../assets/images/sy/商城会员量贩1.png')}
                    alt=""
                  />
                  <div className="li-banner">
                    <Scroll direction={this.state.spiritDir}>
                      <ul className="li-banner-ul">
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城会员量贩2.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城会员量贩3.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城会员量贩4.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城会员量贩5.png')}
                            alt=""
                          />
                        </li>
                      </ul>
                    </Scroll>
                  </div>
                </div>
                {/* repeat */}
                <div className="content-li">
                  <div className="li-title">
                    <div className="stripe" />
                    <span>商城 V享好物</span>
                    <div className="stripe" />
                  </div>
                  <img
                    src={require('../../assets/images/sy/商城V享好物1.png')}
                    alt=""
                  />
                  <div className="li-banner">
                    <Scroll direction={this.state.spiritDir}>
                      <ul className="li-banner-ul">
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城V享好物2.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城V享好物3.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城V享好物4.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城V享好物5.png')}
                            alt=""
                          />
                        </li>
                      </ul>
                    </Scroll>
                  </div>
                </div>
                {/* repeat */}
                <div className="content-li">
                  <div className="li-title">
                    <div className="stripe" />
                    <span>商城 大牌超值汇</span>
                    <div className="stripe" />
                  </div>
                  <img
                    src={require('../../assets/images/sy/商城大牌超值汇1.png')}
                    alt=""
                  />
                  <div className="li-banner">
                    <Scroll direction={this.state.spiritDir}>
                      <ul className="li-banner-ul">
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城大牌超值汇2.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城大牌超值汇3.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城大牌超值汇4.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/商城大牌超值汇5.png')}
                            alt=""
                          />
                        </li>
                      </ul>
                    </Scroll>
                  </div>
                </div>
                {/* repeat */}
                <div className="content-li">
                  <div className="li-title">
                    <div className="stripe" />
                    <span>K-Music</span>
                    <div className="stripe" />
                  </div>
                  <img
                    src={require('../../assets/images/sy/K-MUSIC1.png')}
                    alt=""
                  />
                  <div className="li-banner">
                    <Scroll direction={this.state.spiritDir}>
                      <ul className="li-banner-ul">
                        <li>
                          <img
                            src={require('../../assets/images/sy/K-MUSIC2.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/K-MUSIC3.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/K-MUSIC4.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/K-MUSIC5.png')}
                            alt=""
                          />
                        </li>
                      </ul>
                    </Scroll>
                  </div>
                </div>
                {/* repeat */}
                <div className="content-li">
                  <div className="li-title">
                    <div className="stripe" />
                    <span>小书迷王国</span>
                    <div className="stripe" />
                  </div>
                  <img
                    src={require('../../assets/images/sy/小书迷王国1.png')}
                    alt=""
                  />
                  <div className="li-banner">
                    <Scroll direction={this.state.spiritDir}>
                      <ul className="li-banner-ul">
                        <li>
                          <img
                            src={require('../../assets/images/sy/小书迷王国2.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/小书迷王国3.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/小书迷王国4.png')}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={require('../../assets/images/sy/小书迷王国5.png')}
                            alt=""
                          />
                        </li>
                      </ul>
                    </Scroll>
                  </div>
                </div>
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
      </div>
    )
  }
}

export default Home
