<template>

    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="card p-4">

            <div class=" image d-flex flex-column justify-content-center align-items-center"> 
                <button class="btn btn-secondary" v-on:click="show()"> 
                    <img v-bind:src="this.dataUser[0].picture.medium" height="100" width="100" />
                    </button> 
                    <span class="name mt-3">{{ this.dataUser[0].name.first + ' ' + this.dataUser[0].name.last }}</span> 
                    <span class="idd">{{ '@' + this.dataUser[0].name.first+this.dataUser[0].name.last }}</span>
                <div class="d-flex flex-row justify-content-center align-items-center gap-2"> 
                    <span class="idd1">{{ this.dataUser[0].location.country + ' ' + this.dataUser[0].location.state + ' ' + this.dataUser[0].location.street.name + ' ' + this.dataUser[0].location.street.number }}</span> 
                    <span><i class="fa fa-copy"></i></span> 
                </div>
                <div class="d-flex flex-row justify-content-center align-items-center mt-3"> 
                    <span class="number"> 
                        {{ this.dataUser[0].phone }}
                    </span> 
                </div>
                <div class="text mt-3"> 
                    <span>
                        {{ this.dataUser[0].login.username }}
                    </span> 
                </div>
                <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> 
                    <span><i class="fa fa-twitter"></i></span> 
                    <span><i class="fa fa-facebook-f"></i></span> 
                    <span><i class="fa fa-instagram"></i></span> 
                    <span><i class="fa fa-linkedin"></i></span> 
                </div>
                <div class=" px-2 rounded mt-4 date "> 
                    <span class="join">{{ this.dataUser[0].email }}</span> 
                </div>
            </div>
        </div>
    </div>

</template>
<script>

export default ({
    name: 'UserDisplay',
    props:{
        dataUser:[ {
            default:{
                picture:{ 
                    thumbnail:'https://i.imgur.com/wvxPV9S.png'
                    },
                name:{
                    first:'Eleanor',
                    last:'Pena'
                }, 
                location:{
                    country:'Oxc4c16a645_b21a',
                    state:'Oxc4c16a645_b21a',
                    street: {
                        name:'Oxc4c16a645_b21a',
                        number: 65465
                    }
                },
                email: 'Eleanor Pena',
                login:{
                    username: 'Eleanor Pena'
                },
                phone: 890982,

            }
        }]
    },
    data(){
        return{

        }
    },
    methods:{
        show(){
            console.log(this.dataUser)
        }
    },

    mounted(){

    },
})
</script>
<style scoped>
* {
    margin: 0;
    padding: 0
}

body {
    background-color: #000
}

.card {
    width: 350px;
    background-color: #efefef;
    border: none;
    cursor: pointer;
    transition: all 0.5s
}

.image img {
    transition: all 0.5s
}

.card:hover .image img {
    transform: scale(1.5)
}

.btn {
    height: 140px;
    width: 140px;
    border-radius: 50%
}

.name {
    font-size: 22px;
    font-weight: bold
}

.idd {
    font-size: 14px;
    font-weight: 600
}

.idd1 {
    font-size: 12px
}

.number {
    font-size: 22px;
    font-weight: bold
}

.follow {
    font-size: 12px;
    font-weight: 500;
    color: #444444
}

.btn1 {
    height: 40px;
    width: 150px;
    border: none;
    background-color: #000;
    color: #aeaeae;
    font-size: 15px
}

.text span {
    font-size: 13px;
    color: #545454;
    font-weight: 500
}

.icons i {
    font-size: 19px
}

hr .new1 {
    border: 1px solid
}

.join {
    font-size: 14px;
    color: #a0a0a0;
    font-weight: bold
}

.date {
    background-color: #ccc
}
</style>