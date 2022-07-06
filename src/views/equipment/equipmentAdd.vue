<template>
  <div>
    <el-divider />
    <el-row type="flex" class="row-bg" justify="center">
      添加设备
    </el-row>
    <el-divider />
    <el-form v-if="step==1" ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="设备名字">
        <el-input v-model="sizeForm.equipmentname" />
      </el-form-item>
      <el-form-item label="MAC地址">
        <el-input v-model="sizeForm.macaddress" />
      </el-form-item>
      <el-form-item label="所属机构">
        <el-input v-model="sizeForm.equipmentorgan" />
      </el-form-item>
      <el-form-item label="分辨率">
        <el-select v-model="sizeForm.equipmentresolvingratio" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-row type="flex" justify="center">
        <el-button type="primary" @click="commit()">
          提交
        </el-button>
        <el-button type="primary" @click="pr()">
          打印
        </el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { equipAdd } from '@/api/equipmentAPI'
export default {
  data() {
    return {
      step: 1,
      sizeForm: {
        equipmentname: '',
        macaddress: '',
        equipmentorgan: '',
        equipmentresolvingratio: '',
        currentplan: 'nothing',
        online: 1,
        equipmentgroup: '1',
        materialname: '1'

      },
      options: [{
        value: '1080*1920',
        label: '1920*1080'
      }, {
        value: '108*192',
        label: '108*192'
      }],
      value: '',
      ImgId: '',
      ImgList: []

    }
  },
  mounted() {
  },
  methods: {
    commit() {
      equipAdd(this.sizeForm.equipmentname, this.sizeForm.macaddress, this.sizeForm.currentplan, this.sizeForm.online, this.sizeForm.equipmentorgan, this.sizeForm.equipmentresolvingratio, this.sizeForm.equipmentgroup, this.sizeForm.materialname).then(response => {
        console.log(response)
      })
    },
    pr() {
      console.log(this.sizeForm.equipmentname, this.sizeForm.macaddress, this.sizeForm.currentplan, this.sizeForm.online, this.sizeForm.equipmentorgan, this.sizeForm.equipmentresolvingratio, this.sizeForm.equipmentgroup, this.sizeForm.materialname)
    }
  }
}

</script>
