<template>
  <div class="app-content--standalone">
    <div class="greyBgColor">
      <div class="centerContainer">
        <el-card class="box-card">
          <h2 style="text-align: center">切换主题</h2>
          <el-row :gutter="10">
            <el-col :span="8">
              <img src="" alt="">
              xc
            </el-col>
            <el-col :span="16">
              <h3>模式</h3>
              <div class="skin-item-container">
                <div>
                  <img src="@/assets/style1.png" alt="">
                  <el-radio v-model="style" label="style1">风格1</el-radio>
                </div>
                <div>
                  <img src="@/assets/style2.png" alt="">
                  <el-radio v-model="style" label="style2">风格2</el-radio>
                </div>
              </div>
              <h3>主题色</h3>
              <div class="skin-item-container">
                <div class="tx-c">
                  <div style="background: #3396fc; width: 100px; height: 50px; " class="margin-bottom-size-nomal" />
                  <el-radio v-model="color" label="color1">蓝色</el-radio>
                </div>
                <div class="tx-c margin-left-size-large">
                  <div style="background: #35a44b; width: 100px; height: 50px;" class="margin-bottom-size-nomal" />
                  <el-radio v-model="color" label="color2">绿色</el-radio>
                </div>
                <div class="tx-c margin-left-size-large">
                  <div style="background: #FD6440; width: 100px; height: 50px;" class="margin-bottom-size-nomal" />
                  <el-radio v-model="color" label="color3">橙色</el-radio>
                </div>
                <div class="tx-c margin-left-size-large">
                  <div style="background: #C42727; width: 100px; height: 50px;" class="margin-bottom-size-nomal" />
                  <el-radio v-model="color" label="color4">红色</el-radio>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      style: '',
      color: ''
    }
  }
}
</script>
