<template>
  <div>

    <el-divider />
    <el-row type="flex" class="row-bg" justify="center">
      设备管理
    </el-row>
    <el-table
      :data="EquipmentList"
      style="width: 100%"
    >
      <el-table-column
        prop="equipmentid"
        label="编号"
        width="100"
      />
      <el-table-column
        prop="equipmentname"
        label="名字"
        width="150"
      />
      <el-table-column
        prop="macaddress"
        label="mac地址"
        width="150"
      />
      <el-table-column
        prop="currentplan"
        label="当前计划"
        width="150"
      />
      <el-table-column
        prop="online"
        label="在线"
        width="150"
      />
      <el-table-column
        prop="equipmentorgan"
        label="所属机构"
        width="150"
      />
      <el-table-column
        prop="equipmentresolvingratio"
        label="设备分辨率"
        width="150"
      />
      <el-table-column
        prop="equipmentgroup"
        label="设备组"
        width="150"
      />
      <el-table-column
        prop="materialname"
        label="素材名"
        width="150"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { equipmentGetAll, equipmentDelById } from '@/api/equipmentAPI'
export default {
  data() {
    return {
      EquipemtId: '',
      EquipmentList: [],
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
    console.log(this.EquipmentList)
  },
  methods: {

    del(row) {
      equipmentDelById(row.equipmentid).then(response => {
        if (response.status == 200) {
          this.$message('删除成功')
        }
      })
    },
    getinfobyId() {
      // teacherGetInfo(this.TeacherId,this.$store.getters.token).then(response =>{
      //     this.TeacherList=[]
      //     this.TeacherList.push(response.rspData)
      // })
    },
    getAllInfo() {
      equipmentGetAll().then(response => {
        this.EquipmentList = response.data
      })
    }

  }
}
</script>
