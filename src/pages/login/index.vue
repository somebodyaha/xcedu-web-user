<template>
  <el-form key="loginForm" ref="form" :model="form" :rules="rules" @submit.native.prevent="login">
    <el-form-item prop="account">
      <el-input v-model="form.username" prefix-icon="el-icon-user" placeholder="用户名" />
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="form.password" prefix-icon="el-icon-unlock" show-password placeholder="密码" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit" class="el-button-long">登录</el-button>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="form.remember">记住密码</el-checkbox>
      <router-link to="/user/password/verifyUserForReset" class="fr">忘记密码</router-link>
    </el-form-item>
  </el-form>
</template>

<script>
import { getToken } from '@/utils/token'
const { mapActions } = Vuex

const form = {
  username: '',
  password: '',
  remember: false
}

const rules = {
  username: [{
    required: true,
    message: '用户名不能为空！'
  }],
  password: [{
    required: true,
    message: '密码不能为空！'
  }]
}

export default {
  name: 'UserLogin',

  data () {
    return { form, rules }
  },
  created () {
    if (getToken()) {
      // 进入登陆页 如果有token
      this.$router.push('/mfs-email')
    }
  },
  methods: {
    ...mapActions('user', { loginAction: 'login' }),

    login () {
      this.$refs.form.validate().then(vaild => {
        if (vaild) {
          this.loginAction(this.form).then(() => {
            this.navigateToUrl('/mfs-email', {}, 'location') 
          }).catch(() => {
            this.$message.error('用户名或密码不正确！')
          })
        }
      })
    }
  }
}
</script>
