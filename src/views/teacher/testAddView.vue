<template>
    <div class="main">
        <div class="info" v-if="step==1">
            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="编号">
    <el-input v-model="sizeForm.id"></el-input>
  </el-form-item>

    <el-form-item label="课程">
         <el-select v-model="sizeForm.lectureID" placeholder="请选择">
         <el-option
        v-for="item in cla"
      :key="item.id"
      :label="item.id"
      :value="item.id">
            <span style="float: left">{{ item.label }}</span>
        </el-option>
      </el-select>
  </el-form-item>
  

   <el-form-item label="开始时间">
<el-date-picker type="datetime"  
v-model="sizeForm.timeBegin" placeholder="选择开始时间" value-format="yyyy-MM-dd HH:mm:ss"    style="width: 100%;"></el-date-picker>

  </el-form-item>

   <el-form-item label="结束时间">

<el-date-picker type="datetime"  
v-model="sizeForm.timeFinish" placeholder="选择结束时间" value-format="yyyy-MM-dd HH:mm:ss"    style="width: 100%;"></el-date-picker>


</el-time-select>
  </el-form-item>
</el-form>

            <el-button @click="next">下一步</el-button>
        </div>
        <div class="quiz" v-if="step==2">
            <quiz-list-view :sizeForm="sizeForm"></quiz-list-view>
        </div>
    </div>
</template>
<script>
import {GetAllClassInfo} from '@/api/classApi'
import quizListView from "../teacher/quizListView.vue"
export default {
    components:{
        quizListView
    },
    data(){
        return{
            step:1,
            sizeForm:{
                id:'',
                lectureID:'',
                timeBegin:'',
                timeFinish:'',
                questionsID:[],
                teacherId:''
            },
            cla:[],

        }
    },
    methods:{
        next(){
            this.step=2;
        },
        getClass(){
            this.sizeForm.teacherId=this.$store.getters.id
            GetAllClassInfo(this.$store.getters.token).then(response =>{
                this.cla=response.rspData
                console.log(this.cla)
            })
        }
    },
    mounted(){
        this.getClass()
    }
}
</script>