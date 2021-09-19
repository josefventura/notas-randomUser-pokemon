<template>
    <div>
            <div class="form-group">
                <label class="control-label">Title: </label><input type="text" name="title" class="form-control" v-model="note.title" v-on:keyup="onChange()"/>
            </div>

        <table>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Title
                </th>
                <th>
                    Text
                </th>
                <th>
                    Accion
                </th>

            </tr>
            <tr v-for="(data, index) in datos" :key="index">
                <td>{{data.id}}</td>
                <td>{{data.title}}</td>
                <td>{{data.text}}</td>
                <td> <button class="btn btn-danger" v-on:click="remove(data.id)">X</button></td>
            </tr>
        </table>
    </div>
</template>
<script>


export default ({
    name: 'NoteDisplay',
    props:{

    },
    data(){
        return{
            datos:{
                id: '',
                title: '',
                text: ''
            },
            note:{
                title: ''
            }
        }
    },
    methods:{
        remove(id){
            this.datos = this.datos.filter((data )=> data.id != id );
            localStorage.setItem('notes', JSON.stringify(this.datos))
        },
        onChange(){
            console.log(this.datos)
            if(this.datos.length ==0){
                this.getNotes();
            }else{
                this.filter()
            }
        },
        filter(){
            this.datos = this.datos.filter((data)=> data.title.includes(this.note.title))

           
        },
        getNotes(){
            this.datos = JSON.parse(localStorage.getItem('notes'))

        }
    },

    mounted(){
        this.getNotes();
    },
})
</script>
<style scoped>

</style>
