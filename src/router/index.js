import React, { lazy, Suspense } from 'react'

/// React 16.6 or higher
// 使用Suspense做Code-Splitting
const withSuspense = Component => {
  return props => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  )
}

const Home = withSuspense(lazy(() => import('../views/Home/Home')))
const Order = withSuspense(lazy(() => import('../views/Order/Order')))
const Shop = withSuspense(lazy(() => import('../views/Shop/Shop')))
const User = withSuspense(lazy(() => import('../views/User/User')))
const City = withSuspense(lazy(() => import('../views/City/City')))
const Takeout = withSuspense(lazy(() => import('../views/Takeout/Takeout')))

const router = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/takeout',
    component: Takeout
  },
  {
    component: () => (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        请求的页面不存在
      </div>
    )
  }
]

export default router
