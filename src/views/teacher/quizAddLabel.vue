<template>
    <div class="main">
 <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="题目号">
    <el-input v-model="sizeForm.id"></el-input>
  </el-form-item>
    <el-form-item label="描述">
    <el-input v-model="sizeForm.description"></el-input>
  </el-form-item>
    <el-form-item label="类型">
    <el-select v-model="sizeForm.type">
      <el-option label="选择题" value="0"></el-option>
      <el-option label="填空题" value="1"></el-option>
      <el-option label="简答题" value="2"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="选项" v-if="sizeForm.type==0">
    A<el-input v-model="optionA"></el-input>
    B <el-input v-model="optionB"></el-input>
    C <el-input v-model="optionC"></el-input>
    D <el-input v-model="optionD"></el-input>
  </el-form-item>
   <el-form-item label="分数">
    <el-input v-model="sizeForm.score"></el-input>
  </el-form-item>
     <el-form-item label="正确答案">
    <el-input v-model="sizeForm.correctanswer"></el-input>
  </el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
</el-form>
       
    </div>
</template>
<script>
import {questionAdd} from "@/api/questionApi.js"
export default {
    data(){
        return{
             sizeForm: {
                id: '',
                description: '',
                type: '',
                score:'',
                correctanswer:''
            },
            optionA:'',
            optionB:'',
            optionC:'',
            optionD:'',
            visi:false
        }
    },
    methods:{
        addStudent(){
            this.visi=!this.visi
        },
        onSubmit(){
            this.sizeForm.description=this.sizeForm.description+"； "+"A."+this.optionA+",B."+this.optionB+",C."+this.optionC+",D."+this.optionD
            questionAdd(this.sizeForm,this.$store.getters.token).then(response =>{
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