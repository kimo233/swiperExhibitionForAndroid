<template>
  <div class="quizList">
        <div>
        <input v-model="QuizId" type="text">
        <el-button @click="getinfobyId()">查找题目</el-button>
        <el-button @click="getAllInfo()">显示全部</el-button>
    </div>
  <el-table
    :data="QuizList"
    style="width: 100%">
    <el-table-column
      
      prop="id"
      label="id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="id"
      label="编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述"
      width="120">
    </el-table-column>
    <el-table-column
      prop="
correctanswer"
      label="正确答案"
      width="300">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
        <!-- <el-button @click="update(scope.row)" type="text" size="small">更新</el-button> -->
      </template>
    </el-table-column>
  </el-table>

   <!-- <el-dialog
  title="更新老师"
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
   <el-form-item label="学院">
    <el-input v-model="sizeForm.academy"></el-input>
  </el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
</el-form>
</el-dialog> -->
  </div>
</template>

<script>
import {GetAllQuestionInfo,questionGetInfo,QuestionDeleteById} from "@/api/questionApi"
     export default {
        methods: {
        //   update(row){
        //     this.visi=true
        //     this.sizeForm.id=row.id
        //   },
        //   onSubmit(){
        //    TeacherInfoUpdate(this.sizeForm,this.$store.getters.token).then(response =>{
        //       if(response.rspCode='00000'){
        //             this.$message('更新成功')

        //           }
        //     })
        //   },
            del(row) {
              QuestionDeleteById(row.id,this.$store.getters.token).then(response =>{
                 if(response.rspCode='00000'){
                    this.$message('删除成功')

                  }
              })
            },
            getinfobyId(){
                questionGetInfo(this.QuizId,this.$store.getters.token).then(response =>{
                    this.QuizList=[]
                    this.QuizList.push(response.rspData)
                })
            },
            getAllInfo(){
             GetAllQuestionInfo(this.$store.getters.token).then(response =>{
                this.QuizList=response.rspData
              })
            }

        },
        data(){
            return{
              QuizId:'',
              QuizList:[],
          }
        },
        mounted(){
          this.getAllInfo()
        }
     }
</script>