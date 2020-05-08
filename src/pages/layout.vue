<template>
  <div class="page none-signe-page">
    <div v-if="site.background" class="bg">
      <img :src="site.background">
    </div>
    <el-card class="none-signe-page-card" :body-style="{padding: '40px'}">
      <div class="none-signe-page-header-icon">
        <img :src="site.logo" style="object-fit: contain;">
      </div>
      <router-view />
    </el-card>
    <div class="copright tx-c tx-g-12">{{ site.copyright }}</div>
  </div>
</template>

<script>
const { mapState } = Vuex
export default {
  name: 'NoneSignLayout',

  asyncData ({ store }) {
    return store.dispatch('site/loadConfig')
  },

  computed: {
    ...mapState('site', {
      site: state => state.config
    })
  }
}
</script>
