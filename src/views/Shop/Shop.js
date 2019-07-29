import React from 'react'
import './shop.scss'
import Scroll from '../../components/Scroll/Scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class Shop extends React.Component {
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
  render() {
    return (
      <div className="container">
        <Scroll>
          <div className="scroll-container">
            {/* 头部 */}
            <div className="header">
              <i className="header-icon1 iconfont">&#xe602;</i>
              <input type="text" placeholder="会员量贩" />
              <i className="iconfont icon-abs">&#xe7da;</i>
              <i className="header-icon2 iconfont">&#xe605;</i>
            </div>
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
                  <div className="swiper-slide">
                    <img
                      src={require('../../assets/images/shop/lb4.png')}
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={require('../../assets/images/shop/lb5.png')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* v金 */}
            <div className="vgold">
              <div className="my">我的V金</div>
              <div className="goldnum">
                <h3>1359</h3>
                <img src={require('../../assets/images/V.png')} alt="" />
                <i className="iconfont">&#xe64d;</i>
              </div>
            </div>
            {/* 导航列表 */}
            <div className="nav">
              <div className="nav-li">
                <img
                  src={require('../../assets/images/shop/shop1.png')}
                  alt=""
                />
                <p>会员量贩</p>
              </div>
              <div className="nav-li">
                <img
                  src={require('../../assets/images/shop/shop2.png')}
                  alt=""
                />
                <p>V金福利社</p>
              </div>
              <div className="nav-li">
                <img
                  src={require('../../assets/images/shop/shop3.png')}
                  alt=""
                />
                <p>居家餐厨</p>
              </div>
              <div className="nav-li">
                <img
                  src={require('../../assets/images/shop/shop4.png')}
                  alt=""
                />
                <p>鲜果美食</p>
              </div>
              <div className="nav-li">
                <img
                  src={require('../../assets/images/shop/shop5.png')}
                  alt=""
                />
                <p>美妆个护</p>
              </div>
              <div className="nav-li">
                <img
                  src={require('../../assets/images/shop/shop6.png')}
                  alt=""
                />
                <p>巢玩周边</p>
              </div>
              <div className="nav-li">
                <img
                  src={require('../../assets/images/shop/shop7.png')}
                  alt=""
                />
                <p>数码家电</p>
              </div>
              <div className="nav-li">
                <img
                  src={require('../../assets/images/shop/shop8.png')}
                  alt=""
                />
                <p>服饰箱包</p>
              </div>
              <div className="nav-li">
                <img
                  src={require('../../assets/images/shop/shop9.png')}
                  alt=""
                />
                <p>婴童天地</p>
              </div>
              <div className="nav-li">
                <img
                  src={require('../../assets/images/shop/shop10.png')}
                  alt=""
                />
                <p>领券中心</p>
              </div>
            </div>
            {/* 商城list */}
            <div className="shop-list">
              <div className="exhibition">
                <div className="title">
                  <img
                    src={require('../../assets/images/shop/zs1.png')}
                    alt=""
                  />
                  <p>爆款特惠</p>
                  <img
                    src={require('../../assets/images/shop/zs2.png')}
                    alt=""
                  />
                </div>
                <div className="exhibition-img">
                  <div className="img-bg">
                    <img
                      src={require('../../assets/images/shop/bk1.png')}
                      alt=""
                    />
                  </div>
                  <div className="img-sm">
                    <img
                      src={require('../../assets/images/shop/bk2.png')}
                      alt=""
                    />
                    <img
                      src={require('../../assets/images/shop/bk3.png')}
                      alt=""
                    />
                    <img
                      src={require('../../assets/images/shop/bk4.png')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="exhibition">
                <div className="title">
                  <img
                    src={require('../../assets/images/shop/zs1.png')}
                    alt=""
                  />
                  <p>V金福利社</p>
                  <img
                    src={require('../../assets/images/shop/zs2.png')}
                    alt=""
                  />
                </div>
                <div className="exhibition-img">
                  <div className="img-bg">
                    <img
                      src={require('../../assets/images/shop/xp1.png')}
                      alt=""
                    />
                  </div>
                  <div className="img-sm">
                    <img
                      src={require('../../assets/images/shop/xp2.png')}
                      alt=""
                    />
                    <img
                      src={require('../../assets/images/shop/xp3.png')}
                      alt=""
                    />
                    <img
                      src={require('../../assets/images/shop/xp4.png')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="exhibition">
                <div className="title">
                  <img
                    src={require('../../assets/images/shop/zs1.png')}
                    alt=""
                  />
                  <p>会员量贩</p>
                  <img
                    src={require('../../assets/images/shop/zs2.png')}
                    alt=""
                  />
                </div>
                <div className="exhibition-img">
                  <div className="img-bg">
                    <img
                      src={require('../../assets/images/shop/bk1.png')}
                      alt=""
                    />
                  </div>
                  <div className="img-sm">
                    <img
                      src={require('../../assets/images/shop/bk2.png')}
                      alt=""
                    />
                    <img
                      src={require('../../assets/images/shop/bk3.png')}
                      alt=""
                    />
                    <img
                      src={require('../../assets/images/shop/bk4.png')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Scroll>
      </div>
    )
  }
}

export default Shop
