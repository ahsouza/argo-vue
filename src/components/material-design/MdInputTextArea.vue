<template>
  <div>
<br><br><br>
<h3>Please provide any additional information</h3>

    <md-field>
      <label>Telefone</label>
      <md-input v-model="number" type="number"></md-input>
    </md-field>
    <h4>Additional information</h4>
    <md-field>
      <label>Type here additional info...</label>
      <md-textarea v-model="textarea"></md-textarea>
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