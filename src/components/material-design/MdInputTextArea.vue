<template>
  <div>
<br><br>
<h3>Por favor, preencha suas informações</h3>
<br><br>
    <h4>Descrição</h4>
    <br/>
    <md-field>
      <label>Digite aqui suas informações adicionais...</label>
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