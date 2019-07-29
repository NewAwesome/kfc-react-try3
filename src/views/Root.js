// 用来包裹App组件并且传递store
import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import App from './App'

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
export default Root
