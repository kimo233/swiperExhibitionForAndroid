<template>
  <div class="dashboard-container">
    <div class="name">
      欢迎{{this.name}}<span v-if="type==2">同学!</span> <span v-else-if="type==1">老师！</span> <span v-else>管理员！</span>
    </div>
    <div v-if="type==0">
      {{this.total}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {adminListener} from '@/api/adminApi'

export default {
  name: 'Dashboard',
  data() {
    return {
      currentRole: 'adminDashboard',
      total:"",
    }
  },
  computed: {
    ...mapGetters([
      'type',
      'name',
      'grade'
    ])
  },
  methods:{
    get(){
      adminListener().then(res=>{
        // this.total=res.data
        // console.log(res)
      })
    }
  },
  created() {
  },
  mounted(){
    this.get()
  }
}
</script>
<style lang="css" scoped>
.name{
  font-size: 30px;
}
</style>