import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="header-container">
        <div className="left-icon">
          <NavLink to={this.props.route}>
            <i className="iconfont">&#xe602;</i>
          </NavLink>
        </div>
        <div className="title">
          <span>{this.props.title}</span>
        </div>
        <div className="right-icon" />
      </div>
    )
  }
}
export default Header
