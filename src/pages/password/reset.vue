<template>
  <el-form key="resetPwdForm" ref="form" :model="form" :rules="rules" @submit.native.prevent="reset">
    <el-form-item prop="newPwd">
      <el-input v-model="form.newPwd" show-password placeholder="新密码" />
    </el-form-item>
    <el-form-item prop="confirmPwd">
      <el-input v-model="form.confirmPwd" show-password placeholder="确认密码" />
    </el-form-item>
    <el-form-item>
      <el-button type="success" native-type="submit" class="el-button-long">确认</el-button>
    </el-form-item>
    <el-form-item>
      <div class="tx-c">
        <router-link to="/user/password/verifyUserForReset">上一步</router-link>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
const { mapActions, mapState } = Vuex

const createForm = userId => ({
  id: userId,
  newPwd: '',
  confirmPwd: ''
})

const createRules = form => ({
  newPwd: [{
    required: true,
    message: '请输入新密码！'
  }],
  confirmPwd: [{
    validator: (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== form.newPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    },
    trigger: 'blur'
  }]
})

export default {
  name: 'PwdReset',

  beforeRouteEnter (to, from, next) {
    /* eslint-disable no-console */
    if (from.name === 'verify-reset-user') {
      next()
    } else {
      next({ name: 'verify-reset-user' })
    }
  },

  data () {
    return { form: createForm(this.userId), rules: createRules(this.form) }
  },

  computed: {
    ...mapState('user', {
      userId: state => state.currentUser.id
    })
  },

  methods: {
    ...mapActions('user', { resetAction: 'resetPwd' }),

    reset () {
      this.resetAction(this.form).then(() => {
        this.$message.success('密码已重置， 请使用新密码登录。')
        this.$router.push('/user/login')
      }).catch(() => {
        this.$message.error('密码已重置， 请使用新密码登录。')
      })
    }
  }
}
</script>
