<template>
    <div>
        素材管理
        <el-row>
  <el-col :span="8" v-for="(item, index) in ImgList" :key="index" :offset="index > 0 ? 1 : 0">
    <el-card class="card" :span ="2">
      <el-image 
        style="width: 100%; height: 200px"
        :src="item.base64"
        fit="contain">
    </el-image>

      <div style="padding: 4px; align-items: center;" shadow="never">
        <span>{{item.materialname}}</span>
      </div>
    </el-card>
  </el-col>
      <img class="plus" alt="" src="@/assets/plus.png" @click="update()">
      <el-dialog
            title="添加素材"
            :visible.sync="visi"
            width="50%">
            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="名字">
                <el-input v-model="sizeForm.name"></el-input>
            </el-form-item>
            <el-form-item label="图片">
                <div class="user-header">
                    <input type="file" name="image" accept="image/*" @click="onchangeImgFun"
                    class="header-upload-btn user-header-com">
                    <img  alt="" :src='sizeForm.imgStr' class="user-header-img user-header-com">
                    <p class="tip"> <span class="error">{{errorStr}}</span></p>
                </div>
            </el-form-item>
                <el-button type="primary" @click="submit">立即创建</el-button>
            </el-form-item>
            </el-form>
        </el-dialog>
</el-row>
        
    </div>
</template>
<script>
import {materialGetAll,materialAdd} from '@/api/materialAPI'
export default {
    data(){
            return{
              ImgId:'',
              ImgList:[],
              
              errorStr: '',
            visi:false,
             sizeForm: {
                  name: '',
                  imgStr:"",
            }
            }
        },
        methods:{
             update(){
            this.visi=true

          },
            getAllInfo(){
                materialGetAll().then(response =>{
                    this.ImgList=response.data
                    console.log(response.data)
                })
             },
              onchangeImgFun (e) {
                var file = e.target.files[0]
                console.log(file)
                // 获取图片的大小，做大小限制有用
                let imgSize = file.size
                console.log(imgSize)
                var _this = this 
                // 比如上传头像限制5M大小，这里获取的大小单位是b
                if (imgSize <= 100 * 1024) {
                    // 合格
                    _this.errorStr = ''
                    console.log('大小合适')
                    // base64方法 2
                    var reader = new FileReader()
                    reader.readAsDataURL(file) // 读出 base64
                    reader.onloadend = function() {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                    var dataURL = reader.result

                    _this.sizeForm = dataURL
                    console.log(dataURL)
                    }
                } else {
                    console.log('大小不合适')
                    _this.errorStr = '图片大小超出范围'
                }
            },
            submit(){
                materialAdd(this.sizeForm).then(response =>{

                })
            }
        },
        computed:{},
    mounted(){
          this.getAllInfo()
          console.log(this.ImgList)
        }
}
</script>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    justify-content: space-between;
}
</style>