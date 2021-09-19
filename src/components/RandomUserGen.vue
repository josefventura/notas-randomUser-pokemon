<template>
    <div>
        <button v-on:click="onClickHandler()">user</button>
        <UserDisplay v-bind:dataUser="user"/>
    </div>
</template>
<script>
import { getRandomUser } from '@/api/index'
import UserDisplay from '@/components/UserDisplay.vue'
export default ({
    name: 'RandomUserGen',
    components:{
        UserDisplay
    },
    props:{

    },
    data(){
        return{
            user:{},
        }
    },
    methods:{
        onClickHandler(){
            getRandomUser().then((data)=> this.user=data.results)
            
        },
        see(){
            console.log(this.user)
        }
    },

    mounted(){

    },
})
</script>
<style scoped>

</style>