<template>
  <div class="greyBgColor" style="height: calc(100% - 120px); overflow: auto; margin-top: 120px;">
    <div class="centerContainer">
      <el-card class="box-card">
        <h2 style="text-align: center">切换主题</h2>
        <el-row :gutter="20" style="display: flex; align-items: center;">
          <el-col :span="8">
            <div class="padding-nomal auto-boxshadow">
              <img :src="require('../../assets/'+style + color +'.png')" alt="">
            </div>
          </el-col>
          <el-col :span="16">
            <h3>模式</h3>
            <div class="skin-item-container">
              <div class="skin-item-container-style">
                <el-radio v-model="style" label="default"><div class="margin-bottom-size-nomal"><img src="@/assets/style2.png" alt=""></div><p>风格1</p></el-radio>
              </div>
              <div class="margin-left-size-large skin-item-container-style">
                <el-radio v-model="style" label="width"><div class="margin-bottom-size-nomal"><img src="@/assets/style1.png" alt=""></div><P>风格2</P></el-radio>
              </div>
            </div>
            <h3>主题色</h3>
            <div class="skin-item-container">
              <div class="tx-c">
                <el-radio v-model="color" label="blue"><div style="background: #3396fc; width: 100px; height: 50px; " class="margin-bottom-size-nomal" /><p>蓝色</p></el-radio>
              </div>
              <div class="tx-c margin-left-size-large">
                <el-radio v-model="color" label="green"><div style="background: #35a44b; width: 100px; height: 50px;" class="margin-bottom-size-nomal" /><p>绿色</p></el-radio>
              </div>
              <div class="tx-c margin-left-size-large">
                <el-radio v-model="color" label="orange"><div style="background: #FD6440; width: 100px; height: 50px;" class="margin-bottom-size-nomal" /><p>橙色</p></el-radio>
              </div>
              <div class="tx-c margin-left-size-large">
                <el-radio v-model="color" label="red"><div style="background: #C42727; width: 100px; height: 50px;" class="margin-bottom-size-nomal" /><p>红色</p></el-radio>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top: 100px;">
          <el-col :span="24" style="display: flex; justify-content: center;">
            <el-button type="primary" @click="submit">确定</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
import { skinSubmit } from '@/api/index'
export default {
  data () {
    return {
      style: 'default',
      color: 'blue'
    }
  },
  mounted: function () {
    // 获取默认的userinfo
  },
  methods: {
    submit () {
      skinSubmit({ skin: this.style + '.' + this.color }).then(res => {
        if (res) {
          this.$message({
            message: '设置成功',
            type: 'success'
          })
        }
      }).catch(err => {
        this.$message.error(err)
      })
    },
    cancel () {
      this.$router.go(-1)
    }
  }
}
</script>
