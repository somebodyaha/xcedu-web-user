<template>
  <el-form key="verifyPwdForm" ref="form" :model="form" :rules="rules" @submit.native.prevent="verify">
    <el-form-item prop="phone">
      <el-input v-model="form.phone" placeholder="用户手机号">
        <el-button
          slot="suffix"
          :type="retry === 0 ? 'success' : 'info'"
          size="mini"
          :disabled="retry !== 0"
          style="margin-top: 11px;"
          @click="send"
        >
          {{ btnTex }}
        </el-button>
      </el-input>
    </el-form-item>
    <el-form-item prop="verifyCode">
      <el-input v-model="form.verifyCode" placeholder="验证码" />
    </el-form-item>
    <el-form-item>
      <el-button native-type="submit" class="el-button-long" type="success">下一步</el-button>
    </el-form-item>
    <el-form-item>
      <div class="tx-c">
        <router-link to="/user/login">返回登陆页</router-link>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
const { mapActions } = Vuex

const form = {
  phone: '',
  verifyCode: ''
}

const rules = {
  phone: [{
    required: true,
    message: '手机号不能为空!'
  }],
  verifyCode: [{
    required: true,
    message: '验证码不能为空!'
  }]
}

export default {
  name: 'VerifyCode',

  data () {
    return { form, rules, retry: 0, timer: null }
  },

  computed: {
    btnTex () {
      const { retry } = this
      if (retry === 0) {
        return '获取验证码'
      } else {
        return (retry < 10 ? `0${retry}` : retry) + 's后重新发送'
      }
    }
  },

  methods: {
    ...mapActions('user', {
      sendAction: 'sendVerifyCode',
      verifyAction: 'verifyUser'
    }),

    send () {
      this.$refs.form.validateField('phone', valid => {
        if (valid === '') {
          this.startTimer()
          this.sendAction(this.form.phone).then(() => {
            this.$message.success('验证吗已发送。')
          }).catch(() => {
            this.$message.error('验证吗发送失败，请稍后再试！')
          })
        }
      })
    },

    verify () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.verifyAction(this.form).then(() => {
            this.$router.push('/user/password/reset')
          }).catch(() => {
            this.$message.error({ message: '验证吗发送失败，请稍后再试！', center: true })
          })
        }
      })
    },

    startTimer () {
      this.retry = 60
      this.timer = setInterval(() => {
        this.retry = this.retry - 1
        if (this.retry === 0) {
          clearInterval(this.timer)
          this.timer = null
        }
      }, 1000)
    }
  },

  beforeRouteLeave (to, from, next) {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
    next()
  }
}
</script>
