<template>
  <div>
    <el-divider />
    <el-row type="flex" class="row-bg" justify="center">
      添加计划
    </el-row>
    <el-divider />
    <el-form v-if="step==1" ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="计划名字">
        <el-input v-model="sizeForm.planname" size="" />
      </el-form-item>
      <el-form-item label="创建者">
        <el-input v-model="sizeForm.planauth" width="100" />
      </el-form-item>
      <el-form-item label="播放策略">
        <el-radio-group v-model="stratrgy">
          <el-radio :label="1">替换</el-radio>
          <el-radio :label="2">插播</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="同屏播放">
        <el-radio-group v-model="plansync">
          <el-radio :label="1">打开</el-radio>
          <el-radio :label="2">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="开始时间">
        <el-time-select
          v-model="value"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="选择时间"
        />
      </el-form-item>
      <el-row type="flex" justify="center">
        <el-button type="primary" @click="next()">
          下一步
        </el-button>
      </el-row>
    </el-form>
    <div v-if="step==2">
      <el-row :gutter="0">
        <i class="el-icon-edit" />
        选择节目
      </el-row>
      <el-table
        ref="multipleTable"
        :data="ProgramList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          prop="programid"
          label="编号"
          width="100"
        />
        <el-table-column
          prop="programname"
          label="名字"
          width="150"
        />
        <el-table-column
          prop="programresolvingratio"
          label="分辨率"
          width="150"
        />
        <el-table-column
          prop="programcontent"
          label="内容"
          width="400"
        />
      </el-table>
      <el-row type="flex" justify="center">
        <el-button type="primary" @click="forw()">
          上一步
        </el-button>
        <el-button type="primary" @click="addpro()">
          添加节目
        </el-button>
        <el-button type="primary" @click="commit()">
          提交
        </el-button>
      </el-row>
    </div>

  </div>
</template>

<script>
import { planAdd } from '@/api/planAPI'
import { programGetAll, programDelById } from '@/api/programAPI'
export default {
  data() {
    return {
      step: 1,
      stratrgy: '',
      plansync: '',
      value: '',
      valuedate: '2022-07-07',
      multipleSelection: [],
      sizeForm: {
        planid: '',
        planname: '',
        plancontent: [],
        planauth: 1
      },
      value: '',
      ImgId: '',
      ImgList: [],
      ProgramList: []
    }
  },
  mounted() {
    this.getAllpro()
    console.log(this.ProgramList)
  },
  methods: {
    next() {
      this.step = 2
      console.log(this.sizeForm.planname, this.stratrgy, this.valuedate, this.value.toString(), this.plansync, this.sizeForm.planauth)
    },
    forw() {
      this.step = 1
    },
    getAllpro() {
      programGetAll().then(response => {
        this.ProgramList = response.data
      })
    },
    commit() {
      planAdd(this.sizeForm.planname, this.stratrgy.toString(), this.valuedate, this.value.toString(), this.plansync.toString(), this.sizeForm.plancontent.toString(), this.sizeForm.planauth).then(response => {
        console.log(response)
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val.map(item => item.programid)
    },
    addpro() {
      this.sizeForm.plancontent.push(this.multipleSelection)
      console.log(this.multipleSelection)
      console.log(this.sizeForm.plancontent.toString())
      console.log(this.sizeForm.planname, this.stratrgy.toString(), this.valuedate, this.value.toString(), this.plansync.toString(), this.sizeForm.plancontent.toString(), this.sizeForm.planauth)
    }
  }
}

</script>
