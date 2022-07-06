<template>
  <div>
    <el-divider />
    <el-row type="flex" class="row-bg" justify="center">
      用户管理
    </el-row>
    <el-divider />
    <el-table
      :data="UserList"
      style="width: 100%"
    >
      <el-table-column
        prop="userid"
        label="用户ID"
        width="100"
      />
      <el-table-column
        prop="username"
        label="用户名"
        width="150"
      />
      <el-table-column
        prop="password"
        label="用户密码"
        width="150"
      />
      <el-table-column
        prop="userorgan"
        label="所属机构"
        width="150"
      />
      <el-table-column
        prop="userchar"
        label="用户"
        width="150"
      />
      <el-table-column
        prop="usersituation"
        label="用户状况"
        width="150"
      />
      <el-table-column
        prop="userrealname"
        label="真实姓名"
        width="150"
      />
      <el-table-column
        prop="useremail"
        label="用户邮箱"
        width="150"
      />
      <el-table-column
        prop="userphone"
        label="用户电话"
        width="150"
      />
      <el-table-column
        prop="isadmin"
        label="是否为管理员"
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
import { userGetAll, userDelById } from '@/api/userAPI'
export default {
  data() {
    return {
      UserId: '',
      UserList: [],
      sizeForm: {
        UserId: '',
        id: '',
        ratio: '',
        content: ''
      },
      visi: false
    }
  },
  mounted() {
    this.getAllInfo()
    console.log(this.UserList)
  },
  methods: {

    del(row) {
      userDelById(row.userid).then(response => {
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
      userGetAll().then(response => {
        this.UserList = response.data
      })
    }

  }
}
</script>
