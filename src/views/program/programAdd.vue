<template>
  <div>
    <el-divider />
    <el-row type="flex" class="row-bg" justify="center">
      添加节目
    </el-row>
    <el-divider />
    <el-form v-if="step==1" ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="节目名字">
        <el-input v-model="sizeForm.programname" />
      </el-form-item>
      <el-form-item label="分辨率">
        <el-select v-model="sizeForm.programresolvingratio" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-row type="flex" justify="center">
        <el-button type="primary" @click="next()">
          下一步
        </el-button>
      </el-row>
    </el-form>
    <div v-if="step==2">
      <el-col v-for="(item, index) in ImgList" :key="index" :span="8" :offset="index > 0 ? 1 : 0">
        <el-card class="card" :span="2">
          <el-image
            style="width: 100%; height: 200px"
            :src="item.base64"
            fit="contain"
          />
          <div style="padding: 4px; align-items: center;" shadow="never">
            <span>{{ item.materialname }}</span>
            <span @click="add(item.materialid)">添加</span>
          </div>
        </el-card>
      </el-col>
      <el-row type="flex" justify="center">
        <el-button type="primary" @click="forw()">
          上一步
        </el-button>
        <el-button type="primary" @click="commit()">
          提交
        </el-button>
      </el-row>
    </div>

  </div>
</template>

<script>
import { materialGetAll } from '@/api/materialAPI'
import { programAdd } from '@/api/programAPI'
export default {
  data() {
    return {
      step: 1,
      sizeForm: {
        programname: '',
        programresolvingratio: '',
        programcontent: []
      },
      options: [{
        value: '1080*1920',
        label: '1920*1080'
      }, {
        value: '1080*1920',
        label: '1080*1920'
      }],
      value: '',
      ImgId: '',
      ImgList: []

    }
  },
  mounted() {
    this.getAllInfo()
  },
  methods: {
    next() {
      this.step = 2
    },
    forw() {
      this.step = 1
    },
    add(id) {
      this.sizeForm.programcontent.push(id)
      console.log(this.sizeForm.programcontent.toString())
    },
    getAllInfo() {
      materialGetAll().then(response => {
        this.ImgList = response.data
        console.log(response.data)
      })
    },
    commit() {
      programAdd(this.sizeForm.programname, this.sizeForm.programresolvingratio, this.sizeForm.programcontent.toString()).then(response => {
        console.log(response)
      })
    }
  }
}

</script>
