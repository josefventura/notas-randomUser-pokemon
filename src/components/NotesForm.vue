<template>
  <div>
    <form name="form" id ="form" class="form-control" v-on:submit.prevent="save();">
      <div class="form-group">
        <label class="control-label">Title: </label><input type="text" name="title" class="form-control" v-model="note.title"/>
      </div>
      <div class="form-group">
        <label class="control-label">Note: </label><textarea name="text" class="form-control" v-model="note.text"></textarea>
      </div>
      <input type="submit" class="btn btn-primary"/>
    </form>
  </div>
</template>

<script>
import shortid from 'shortid'

export default {
  name: 'NotesForm',
  props: {

  },
  data(){
    return{
      note:{
        id: '',
        title: '',
        text: ''

      },
      notes: [ ]
    }
  },
  methods:{
    save(){
      this.newId();

      this.notes.unshift({... this.note})
      
      this.newNote().then(
        console.log(this.notes),
        this.resetNote()
      )
      console.log(this.notes)

    },
    newId(){
      this.note.id = shortid.generate();
    },
    async newNote(){
      try{
        localStorage.setItem('notes', JSON.stringify(this.notes))
        alert("se guardo la nota")
        return 1
      }catch(e){
        alert(e)
        return 0
      }
a
    },
    resetNote(){
      this.note= {
        id: '',
        title: '',
        text: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
