import Layout from '@page/layout.vue'

import UserLogin from '@page/login/index.vue'
import ChangePwd from '@page/password/change.vue'
import PwdVerify from '@page/password/verify.vue'
import PwdReset from '@page/password/reset.vue'

const NoneSignPages = {
  path: '/user',
  component: Layout,
  redirect: '/user/login',
  children: [{
    name: 'user-login',
    path: 'login',
    component: UserLogin
  }, {
    name: 'verify-reset-user',
    path: 'password/verifyUserForReset',
    component: PwdVerify
  }, {
    name: 'password-reset',
    path: 'password/reset',
    component: PwdReset
  }]
}

const ChnagePassword = {
  name: 'change-pwd',
  path: '/user/change/pwd',
  component: ChangePwd
}

export default [NoneSignPages, ChnagePassword]
