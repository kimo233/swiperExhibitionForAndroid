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
            <el-button @click="add(scope.row)">添加题目</el-button>
      </template>
    </el-table-column>
  </el-table>
<el-button @click="before"></el-button>
<el-button @click="show">显示已加题目</el-button>
<el-button @click="update">添加卷子</el-button>
 <el-dialog
  title="已选题目"
  :visible.sync="visi"
  width="50%"
  :before-close="handleClose">
  <el-table
    :data="current"
    style="width: 100%">
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
            <el-button @click="del(scope.row)">移除题目</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-dialog>
  </div>
</template>

<script>
import {GetAllQuestionInfo,questionGetInfo} from "@/api/questionApi"
import {testUpload} from '@/api/testApi'
     export default {
         props:['sizeForm'],
        methods: {
            add(row){
                this.current.push(row)

            },
            show(){
                this.visi=true
                console.log(this.current)
            },
            before(){
                this.step=1
            },
            update(){
                for(var i=0;i<this.current.length;i++){
                    this.sizeForm.questionsID.push(this.current[i].id)
                }
                testUpload(this.sizeForm,this.$store.getters.token).then(response =>{
                    this.$message('添加成功')
                })
            },
            del(row){
                var i
                for( i=0;i<this.current.length;i++){
                    if(this.current[i]==row){
                        break
                    }
                }
                this.current.splice(i,1)
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
              current:[],
              visi:false
          }
        },
        mounted(){
          this.getAllInfo()
        }
     }
</script>