<template>
    <div class="userMan">
        <student-list></student-list>
    </div>
</template>
<script>
import studentList from "@/components/StudentList/StudentList.vue"
export default {
    components:{
        studentList
    }
}
</script>