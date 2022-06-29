<template>
    <div class="main">
 <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="课程号">
    <el-input v-model="sizeForm.id"></el-input>
  </el-form-item>
  <el-form-item label="老师">
      <el-select v-model="sizeForm.teacherID" placeholder="请选择">
    <el-option
      v-for="item in teachers"
      :key="item.id"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
  </el-form-item>
   <el-form-item label="学院">
    <el-input v-model="sizeForm.academy"></el-input>
  </el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
<script>
import {GetALLteachersInfo} from "@/api/teacherApi.js"
import {ClassAdd} from "@/api/classApi.js"
export default {
    data(){
        return{
             sizeForm: {
                id: '',
                teacherID:'',
                academy: '',
            },
            teachers:[]
        }
    },
    methods:{
        addStudent(){
            this.visi=!this.visi
        },
        onSubmit(){
            ClassAdd(this.sizeForm,this.$store.getters.token).then(response =>{
                 if(response.rspCode='00000'){
                    this.$message('添加成功')
                    this.visi=false
                  }
            }).catch(err=>{
                console.log(err.message)
            })
        },
        getTeacher(){
            GetALLteachersInfo(this.$store.getters.token).then(response =>{
                this.teachers=response.rspData
        })
        }
    },
    mounted(){
        this.getTeacher()
    }
    
}
</script>