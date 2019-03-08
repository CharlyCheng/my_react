import { 
  Home, 
  MyCenter,
  Coupon
} from '../view'


const routes = [
  { 
    path: '/',
    exact: true,
    component: Home
  },
  { 
    path: '/home',
    exact: true,
    component: Home
  },
  { 
    path: '/mycenter',
    exact: true,
    component: MyCenter,
    // routes: [
    //   { 
    //     path: '/mycenter/coupon',
    //     exact: true,
    //     component: Coupon
    //   }
    // ]
  },
  // { 
  //   path: '/mycenter/coupon',
  //   exact: true,
  //   component: Coupon
  // }
]

export default routes