import React from 'react'
import Header from '../../components/Header/Header'
import './City.scss'
import axios from '../../api/axios'
import 'swiper/dist/css/swiper.min.css'
import Loading from '../../components/Loading/Loading'
import { CSSTransition } from 'react-transition-group'
import Scroll from '../../components/Scroll/Scroll'

// import { province } from 'antd-mobile-demo-data'
import { StickyContainer, Sticky } from 'react-sticky'
import { ListView, List, SearchBar } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css' // or 'antd-mobile/dist/antd-mobile.less'

class City extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cityList: [],
      // loading状态
      loading: true,
      // 过渡动画状态
      show: false
    }
  }
  componentWillMount() {
    axios.get('/city').then(res => {
      this.setState({
        homeList: res.data.data,
        loading: false
      })
      console.log(this.state.homeList)
    })
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
  stickyTitle = ({ y }) => {
    console.log(y)
    // y为负值。用sticky高度加n个li的高度，在此高度范围内，对应某一个sticky的fixed定位
  }
  render() {
    return (
      <div className="city-container">
        <Header title="城市列表" route="/home" />
        <CSSTransition
          in={this.state.show}
          timeout={300}
          classNames="translate"
        >
          <div className="city-trans-container">
            <div className="city-search">
              <input type="text" placeholder="输入城市名或首字母查询" />
              <i className="iconfont">&#xe7da;</i>
            </div>
            <div className="city-gps">
              <span>晋中市 GPS定位</span>
            </div>
            {/* 城市列表 */}
            <div className="city-list">
              <Scroll onScroll={this.stickyTitle}>
                <div className="scroll-container">
                  <div className="city-li">
                    <div className="sticky">
                      <span>热门城市</span>
                    </div>
                    <ul>
                      <li>北京</li>
                      <li>天津</li>
                      <li>上海</li>
                      <li>甘肃</li>
                      <li>云南</li>
                      <li>西藏</li>
                      <li>青海</li>
                      <li>西宁</li>
                      <li>山西</li>
                      <li>太原</li>
                      <li>北京</li>
                      <li>天津</li>
                      <li>上海</li>
                      <li>甘肃</li>
                      <li>云南</li>
                      <li>西藏</li>
                      <li>青海</li>
                      <li>西宁</li>
                      <li>山西</li>
                      <li>太原</li>
                    </ul>
                  </div>
                </div>
              </Scroll>
            </div>
            {/* 右侧跳转栏 */}
            <div className="city-bar">right-bar</div>
          </div>
        </CSSTransition>
        {/* loading */}
        <Loading title="Loading..." show={this.state.loading} />
      </div>
    )
  }
}

export default City
