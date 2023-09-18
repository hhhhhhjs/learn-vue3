<script>
import { ref,computed } from 'vue'
export default{
    name:'Computed-vue',
    setup(){
        const anthor = ref({
            name:'hj',
            book:['hhh','jjj','ooo']
        })
        const authBook = computed( () => {
            return anthor.value.book.length > 0? '是': 'fou'
        })
        return{
            anthor,
            authBook
        }
    }
}



</script>
<template>
    <div>作者是否出过书 {{ authBook }}</div>
    <button v-on:click="anthor.book=[]">点击删除作者书籍</button>
</template>