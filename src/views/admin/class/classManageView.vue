<template>
    <div class="calssList">
      <div>
        <input v-model="classID" type="text">
        <el-button @click="getinfobyId">查找课程</el-button>
        <el-button @click="getAllStudentsInfo">显示全部</el-button>
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

  <el-dialog
    title="添加学生"
  :visible.sync="visi"
  width="80%"
  :before-close="handleClose">
        <el-transfer
        v-model="studentCurrentList"
        :props="{key: 'id',label: 'name'}"
        :data="studentList">
              <el-button class="transfer-footer" slot="right-footer" size="small">添加</el-button>
        </el-transfer>
  </el-dialog>

    </div>
    
</template>

<script>
import{GetAllClassInfo,ClassGetInfo,ClassDeleteById} from "@/api/classApi"
import{GetAllStudentsInfo} from "@/api/studentApi"
export default {
  data() {
    return {
            classList:[],
            classID:'',
            visi:false,
            studentList:[],
            studentCurrentList:[]
          }
        },
        methods: {
          update(row){
            this.visi=true
            ClassGetInfo(row.id,this.$store.getters.token).then(response =>{
                this.studentCurrentList=response.rspData.students
                console.log(this.studentCurrentList)
            })
          },
            del(row) {
                console.log(row)
                ClassDeleteById(row.id,this.$store.getters.token).then(response =>{
                  if(response.rspCode='00000'){
                    this.$message('删除成功')

                  }
                  
                })
            },
            getinfobyId(){
                 ClassGetInfo(this.classID,this.$store.getters.token).then(response => {
                    this.classList=[]
                    this.classList.push(response.rspData)
                 })

            },
            getAllClassInfo(){
              GetAllClassInfo(this.$store.getters.token).then(response => {
                this.classList=response.rspData    
              })
                GetAllStudentsInfo(this.$store.getters.token).then(response => {
                     this.studentList=response.rspData
                     console.log(this.studentList)
                 })
            },
            filterMethod(query, item) {
                return item.pinyin.indexOf(query) > -1;
            }
        },
        
        mounted(){
            this.getAllClassInfo()
        }
        
     }
</script>