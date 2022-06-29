<template>
    <div class="main">
        <el-button @click="addStudent">添加老师</el-button>
        <el-dialog
  title="添加老师"
  :visible.sync="visi"
  width="50%"
  :before-close="handleClose">
 <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="工号">
    <el-input v-model="sizeForm.id"></el-input>
  </el-form-item>
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
   <el-form-item label="学院">
    <el-input v-model="sizeForm.academy"></el-input>
  </el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
</el-form>
</el-dialog>
       
    </div>
</template>
<script>
import {TeacherAdd} from "@/api/teacherApi.js"
export default {
    data(){
        return{
             sizeForm: {
                Name: '',
                id: '',
                sex: '',
                academy: '',
                passWord:''
            },
            visi:false
        }
    },
    methods:{
        addStudent(){
            this.visi=!this.visi
        },
        onSubmit(){
            TeacherAdd(this.sizeForm,this.$store.getters.token).then(response =>{
                 if(response.rspCode='00000'){
                    this.$message('添加成功')
                    this.visi=false
                  }
            }).catch(err=>{
                console.log(err.message)
            })
        }
    }
    
}
</script>