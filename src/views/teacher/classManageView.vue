<template>
<div>
    <div>
        <!-- <input v-model="classID" type="text"> -->
        <!-- <el-button @click="getinfobyId">查找课程</el-button>
        <el-button @click="getAllStudentsInfo">显示全部</el-button> -->
    </div>
  <el-table
    :data="classList"
    
    style="width: 100%">
    <el-table-column
      
      prop="id"
      label="id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="academy"
      label="学院"
      width="120">
    </el-table-column>
    <el-table-column
      prop="teacherID"
      label="教师编号"
      width="300">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
        <el-button @click="update(scope.row)" type="text" size="small">添加学生</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
import {ClassGetInfo} from '@/api/classApi'
export default {
    data(){
        return{
            classList:[],
            // classId:'',
        }
    },
    methods:{
      getClass(){
        for(var i=0;i<this.$store.getters.lec.length;i++){
            ClassGetInfo(this.$store.getters.lec[i],this.$store.state.token).then( res=>{
              this.classList.push(res.rspData)
            })
        }
        // ClassGetInfo(this.$store.getters.lec[1],this.$store.state.token).then( res=>{
        //       this.classList.push(res.rspData)
        //     })
      }
    },
    mounted(){
        this.getClass()
    }
}
</script>