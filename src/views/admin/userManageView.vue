<template>
    <div>
        <el-button @click="set"></el-button>
    </div>
</template>
<script>
export default {
    methods:{
        set(){
            sessionStorage.setItem("flg","1");
        }
    }
}
</script>