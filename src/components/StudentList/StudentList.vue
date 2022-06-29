<template>
    <div class="studentList">
      <div>
        <input v-model="studentID" type="text">
        <el-button @click="getinfobyId">查找学生</el-button>
        <el-button @click="getAllStudentsInfo">显示全部</el-button>
        <student-add-label></student-add-label>
    </div>
  <el-table
    :data="studentList"
    
    style="width: 100%">
    <el-table-column
      
      prop="id"
      label="id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="pictureURL"
      label="照片"
      width="120">
    </el-table-column>
    <el-table-column
      prop="academy"
      label="学院"
      width="300">
    </el-table-column>
    <el-table-column
      prop="major"
      label="专业"
      width="300">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
        <el-button @click="update(scope.row)" type="text" size="small">更新</el-button>
      </template>
    </el-table-column>
  </el-table>
          <el-dialog
  title="更新学生"
  :visible.sync="visi"
  width="50%"
  :before-close="handleClose">
 <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="姓名">
    <el-input v-model="sizeForm.Name"></el-input>
  </el-form-item>
    <el-form-item label="密码">
    <el-input v-model="sizeForm.passWord"></el-input>
  </el-form-item>
    <el-form-item label="性别">
    <el-select v-model="sizeForm.sex">
      <el-option label="男" value="男"></el-option>
      <el-option label="女" value="女"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="年级">
    <el-input v-model="sizeForm.grade"></el-input>
  </el-form-item>
   <el-form-item label="学院">
    <el-input v-model="sizeForm.academy"></el-input>
  </el-form-item>
   <el-form-item label="专业">
    <el-input v-model="sizeForm.major"></el-input>
  </el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
</el-form>
</el-dialog>
    </div>
    
</template>

<script>
import{GetAllStudentsInfo,studentGetInfo,StudentsInfoUpdate,StudentDeleteById} from "@/api/studentApi"
import studentAddLabel from "../StudentList/StudentAddLabel.vue"
export default {
  components:{studentAddLabel},
  data() {
    return {
            studentList:[],
            studentID:'',
            visi:false,
             sizeForm: {
                Name: '',
                id: '',
                sex: '',
                grade: '',
                academy: '',
                major: '',
                passWord:''
            },
          }
        },
        methods: {
          update(row){
            this.visi=true
            this.sizeForm.id=row.id
          },
          onSubmit(){
            StudentsInfoUpdate(this.sizeForm,this.$store.getters.token).then(response =>{
              if(response.rspCode='00000'){
                    this.$message('更新成功')

                  }
            })
          },
            del(row) {
                console.log(row)
                StudentDeleteById(row.id,this.$store.getters.token).then(response =>{
                  if(response.rspCode='00000'){
                    this.$message('删除成功')

                  }
                  
                })
            },
            getinfobyId(){
                 studentGetInfo(this.studentID,this.$store.getters.token).then(response => {
                    this.studentList=[]
                    this.studentList.push(response.rspData)
                 })
            },
            getAllStudentsInfo(){
              GetAllStudentsInfo(this.$store.getters.token).then(response => {
                this.studentList=response.rspData    
              })
            }
        },
        
        mounted(){
            this.getAllStudentsInfo()
        }
        
     }
</script>