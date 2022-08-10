<template>
  <div class="home">
    <Header></Header>
    <info :infoData="infoData"></info>
    <CaseNum :caseNumData="caseNumData"></CaseNum>
  </div>
</template>

<script >
import Header from '../components/Header.vue'
import info from '../components/info.vue'
import CaseNum from '../components/CaseNum.vue'

export default {
  name: 'Home',
  data() {
    return {
      infoData: {},
      caseNumData: {}
    }
  },
  created() {
    this.$api.getDataInfo({
      key: "d651806a778a8735c8ce12d371708045"
    }).then(res => {
      console.log(res);
      this.infoData = {
        pubDateStr1: res.newslist[0].news[0].pubDateStr,// 发生时间
        title1: res.newslist[0].news[0].title, // 新增确诊数
        pubDateStr2: res.newslist[0].news[1].pubDateStr,
        title2: res.newslist[0].news[1].title,
        pubDateStr3: res.newslist[0].news[2].pubDateStr,
        title3: res.newslist[0].news[2].title,
      }
      this.caseNumData = {
        modifyTime: res.newslist[0].desc.modifyTime, // 数据统计的截止时间

        currentConfirmedCount: res.newslist[0].desc.currentConfirmedCount, // 现存确诊
        suspectedCount: res.newslist[0].desc.suspectedCount, // 现存疑似
        seriousCount: res.newslist[0].desc.seriousCount, // 现存重症
        confirmedCount: res.newslist[0].desc.confirmedCount, // 累计确诊
        deadCount: res.newslist[0].desc.deadCount, // 累计死亡
        curedCount: res.newslist[0].desc.curedCount, // 累计治愈

        currentConfirmedIncr: res.newslist[0].desc.currentConfirmedIncr, // 相比昨日现存确诊
        suspectedIncr: res.newslist[0].desc.suspectedIncr, // 相比昨日现存疑似
        seriousIncr: res.newslist[0].desc.seriousIncr, // 相比昨日现存重症
        confirmedIncr: res.newslist[0].desc.confirmedIncr, // 相比昨日累计确诊
        deadIncr: res.newslist[0].desc.deadIncr, // 相比昨日新增死亡
        curedIncr: res.newslist[0].desc.curedIncr, // 相比昨日新增治愈
      }
    })
  },
  components: {
    Header,
    info,
    CaseNum
  }
}
</script>