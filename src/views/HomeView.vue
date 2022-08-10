<template>
  <div class="home">
    <Header></Header>
    <info :infoData="infoData"></info>
  </div>
</template>

<script >
import Header from '../components/Header.vue'
import info from '../components/info.vue'

export default {
  name: 'Home',
  data() {
    return {
      infoData: {}
    }
  },
  created() {
    this.$api.getDataInfo({
      key: "d651806a778a8735c8ce12d371708045"
    }).then(res => {
      console.log(res);
      this.infoData = {
        pubDateStr1: res.newslist[0].news[0].pubDateStr,
        title1: res.newslist[0].news[0].title,
        pubDateStr2: res.newslist[0].news[1].pubDateStr,
        title2: res.newslist[0].news[1].title,
        pubDateStr3: res.newslist[0].news[2].pubDateStr,
        title3: res.newslist[0].news[2].title,
      }
    })
  },
  components: {
    Header,
    info
  }
}
</script>