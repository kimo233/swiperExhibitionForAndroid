<template>
  <div>
    计划管理
    <el-table
      :data="PlanList"
      style="width: 100%"
    >
      <el-table-column

        prop="planid"
        label="编号"
        width="100"
      />
      <el-table-column
        prop="planname"
        label="名字"
        width="150"
      />
      <el-table-column
        prop="stratrgy"
        label="计划"
        width="150"
      />
      <el-table-column
        prop="plandata"
        label="数据"
        width="150"
      />
      <el-table-column
        prop="plantime"
        label="时间"
        width="150"
      />
      <el-table-column
        prop="plansync"
        label="内容"
        width="150"
      />
      <el-table-column
        prop="plancontent"
        label="注释"
        width="150"
      />
      <el-table-column
        prop="planauth"
        label="创建者"
        width="150"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { planGetAll, planDelById } from '@/api/planAPI'
export default {
  data() {
    return {
      PlanId: '',
      PlanList: [],
      sizeForm: {
        Name: '',
        id: '',
        ratio: '',
        content: ''
      },
      visi: false
    }
  },
  mounted() {
    this.getAllInfo()
    console.log(this.PlanList)
  },
  methods: {

    del(row) {
      planDelById(row.planid).then(response => {
        if (response.status == 200) {
          this.$message('删除成功')
        }
      })
    },
    getinfobyId() {
      // teacherGetInfo(this.TeacherId,this.$store.getters.token).then(response =>{
      //     this.TeacherList=[]
      //     this.TeacherList.push(response.rspData)
      // })
    },
    getAllInfo() {
      planGetAll().then(response => {
        this.PlanList = response.data
      })
    }

  }
}
</script>
