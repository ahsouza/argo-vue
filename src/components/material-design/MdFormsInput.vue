<template>
  <div>
    <md-field>
      <label>Nome</label>
      <md-input v-model="type"></md-input>
    </md-field>

    <md-field>
      <label>Sobrenome</label>
      <md-input v-model="type"></md-input>
    </md-field>

    <md-field>
      <label>Email</label>
      <md-input v-model="type"></md-input>
    </md-field>

     <md-field>
      <label>Telefone</label>
      <md-input v-model="number" type="number"></md-input>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'TextFields',
    data: () => ({
      initial: 'Initial Value',
      type: null,
      withLabel: null,
      inline: null,
      number: null,
      textarea: null,
      autogrow: null,
      disabled: null
    })
  }
</script>