<template>
  <div class="testList">
        <div>
        <input v-model="TestId" type="text">
        <el-button @click="getinfobyId()">查找试卷</el-button>
        <el-button @click="getAllInfo()">显示全部</el-button>
        <teacher-add-label></teacher-add-label>
    </div>
  <el-table
    :data="TestList"
    style="width: 100%">
    <el-table-column
      
      prop="id"
      label="id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="teacherID"
      label="老师编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="lectureID"
      label="课程编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="timeBegin"
      label="开始时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="timeFinish"
      label="结束时间"
      width="300">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import {GetAllTestInfo,testGetInfo,TestDeleteById} from "@/api/testApi"
     export default {
        methods: {
            del(row) {
              TestDeleteById(row.id,this.$store.getters.token).then(response =>{
                 if(response.rspCode='00000'){
                    this.$message('删除成功')

                  }
              })
            },
            getinfobyId(){
                testGetInfo(this.TestId,this.$store.getters.token).then(response =>{
                    this.TestList=[]
                    this.TestList.push(response.rspData)
                })
            },
            getAllInfo(){
              GetAllTestInfo(this.$store.getters.token).then(response =>{
                this.TestList=response.rspData
              })
            }

        },
        data(){
            return{
              TestId:'',
              TestList:[],
              }
        },
        mounted(){
          this.getAllInfo()
        }
     }
</script>