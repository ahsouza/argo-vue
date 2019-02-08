<template>
  <div>
    <md-field>
      <label>Single</label>
      <md-file v-model="single" />
    </md-field>

  </div>
</template>

<script>
  export default {
    name: 'FileField',
    data: () => ({
      initial: 'vue-material-is-awesome.jpg',
      single: null,
      placeholder: null,
      disabled: null,
      multiple: null
    })
  }
</script>