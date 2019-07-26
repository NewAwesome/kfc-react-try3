import React from 'react'
import '../assets/styles/font.scss'
import '../assets/styles/reset.scss'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import router from '../router'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="content">
            <Switch>
              <Redirect from="/" to="/home" exact />
              {renderRoutes(router)}
            </Switch>
          </div>
          <ul className="footer">
            <NavLink to="/home" className="nav-link" activeClassName="active">
              <li>
                <p className="iconfont">&#xe680;</p>
                <span>首页</span>
              </li>
            </NavLink>
            <NavLink to="/shop" className="nav-link" activeClassName="active">
              <li>
                <p className="iconfont">&#xe611;</p>
                <span>商城</span>
              </li>
            </NavLink>
            <NavLink to="/order" className="nav-link" activeClassName="active">
              <li>
                <p className="iconfont">&#xe72d;</p>
                <span>订单</span>
              </li>
            </NavLink>
            <NavLink to="/user" className="nav-link" activeClassName="active">
              <li>
                <p className="iconfont">&#xe911;</p>
                <span>我的</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </Router>
    )
  }
}

export default App
