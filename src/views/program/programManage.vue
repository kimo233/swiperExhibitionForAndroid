<template>
  <div>
    <el-divider />
    <el-row type="flex" class="row-bg" justify="center">
      节目管理
    </el-row>

    <el-table
      :data="ProgramList"
      style="width: 100%"
    >
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
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="del(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { programGetAll, programDelById } from '@/api/programAPI'
export default {
  data() {
    return {
      ProgramId: '',
      ProgramList: [],
      sizeForm: {
        Name: '',
        id: '',
        ratio: '',
        content: ''
      },
      visi: false
    }
  },
  mounted() {
    this.getAllInfo()
    console.log(this.ProgramList)
  },
  methods: {
    del(row) {
      programDelById(row.programid).then(response => {
        if (response.status == 200) {
          this.$message('删除成功')
        }
      })
    },
    getinfobyId() {

    },
    getAllInfo() {
      programGetAll().then(response => {
        this.ProgramList = response.data
      })
    }

  }
}
</script>
