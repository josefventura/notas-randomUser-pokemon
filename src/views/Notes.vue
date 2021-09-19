<template>
  <div class="form-group">

    <NotesForm />
    <NoteDisplay/>
  </div>
</template>

<script>
// @ is an alias to /src
import NotesForm from '@/components/NotesForm.vue'
import NoteDisplay from '@/components/NoteDisplay.vue'

export default {
  name: 'Notes',
  components: {
    NotesForm,
    NoteDisplay
  }
}
</script>
