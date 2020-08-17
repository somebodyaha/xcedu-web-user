<template>
  <div class="app-content--standalone">
    <div class="greyBgColor">
      <div class="centerContainer">
        <el-card class="box-card">
          <h2 style="text-align: center">修改密码</h2>
          <div style="width: 400px; margin: 0 auto">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="原密码">
                <el-input v-model="form.oldPass" type="password" />
              </el-form-item>
              <el-form-item label="新密码">
                <el-input v-model="form.newPass" type="password" />
              </el-form-item>
              <el-form-item label="密码确认">
                <el-input v-model="form.comfirmPassWord" type="password" />
              </el-form-item>
              <el-form-item size="medium" class="form-btn-groups">
                <el-button type="primary">保存</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PsdResst',
  data () {
    return {
      form: {
        oldPass: '',
        newPass: '',
        comfirmPassWord: ''
      }
    }
  }
}
</script>
<style lang="scss">
  .centerContainer{
    width: 1000px;
    margin: 0 auto;
  }
  .form-btn-groups .el-form-item__content{
    text-align: center;
  }
</style>
