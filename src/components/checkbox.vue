<template>
  <div>
    <md-checkbox v-model="array" value="1">Custom interface and layout</md-checkbox>
    <md-checkbox v-model="array" value="2">Web site design</md-checkbox>
    <md-checkbox v-model="boolean">Seo optimization</md-checkbox>
    <md-checkbox v-model="string" value="my-checkbox">CMS integrations (Wordpress)</md-checkbox>
    <md-checkbox v-model="novalue">Newsletter Campaign</md-checkbox>
    <md-checkbox v-model="obj" :value="obj1">Logo Design</md-checkbox>

  </div>
</template>

<script>
  export default {
    name: 'RegularCheckboxes',
    data: () => ({
      array: [],
      boolean: false,
      string: null,
      novalue: null,
      disabled: true,
      obj1: {name: 'obj1'},
      obj2: {name: 'obj2'},
      obj: null,
      indeterminate: true
    })
  }
</script>

<style lang="scss" scoped>
  .md-checkbox {
    display: flex;
    margin-left: 10%;
    margin-top: 3%;
  }


</style>