<template>
  <div class="dashboard-container">
    <div class="name">
      <!-- 欢迎{{this.name}}<span v-if="type==2">同学!</span> <span v-else-if="type==1">老师！</span> <span v-else>管理员！</span> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {

      total:"",
    }
  },
  computed: {
    ...mapGetters([
      'name',
    ])
  },
  methods:{

  },
  created() {
  },
  mounted(){
  }
}
</script>
<style lang="css" scoped>
.name{
  font-size: 30px;
}
</style>