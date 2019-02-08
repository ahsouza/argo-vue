<template>
  <div>
    <b-form-group label="What your poject need?" style="font-size: 20px;">
      <b-form-checkbox-group style="font-size: 18px; display: inline-block;" v-model="selected" name="flavour1" :options="options">
      </b-form-checkbox-group>
    </b-form-group>

  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: [],
      options: [
        {text: 'Custom interface and layout', value: 'interface and layout'},
        {text: 'Web site design', value: 'Site'},
        {text: 'Seo optimization', value: 'Seo'},
        {text: 'CMS integrations (Wordpress)', value: 'CMS integrations'},
        {text: 'Newsletter Campaign', value: 'Newsletter'},
        {text: 'Logo Design', value: 'Logo'}
      ]
    }
  }
}
</script>