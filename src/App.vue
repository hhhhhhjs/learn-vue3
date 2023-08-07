
<script>
import { ref } from 'vue'
export default{
  name:'App', //这里建议给个名字
  //setup 函数
  setup(){
    //创建响应式变量
    const count = ref(0)
    const obj = {
      arr:[1,2,3,4],
      obj:{
        name:'小明',
        age:18
      }
    }
    const obj1 = ref(obj)
    setTimeout( () => {
     obj1.value.arr = [222]
    },3000)
    // 所有模板中的数据都需要return
    return{
      count,
      obj1
    }
  }

}

</script>
<template>
  <div class="title"> hahha {{ count }}</div>
  <div>{{ obj1.name }}</div>
  <div>{{ obj1.arr }}</div>
</template>
<style scoped>
.title{
  color:red;
  background-color:black;
}
</style>