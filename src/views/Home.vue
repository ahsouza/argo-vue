<template>
  <div class="home">
    <full-page :options="options">
      <div class="section">
        Section1
      </div>
      <div class="section">
        Section2
      </div>
      <div class="section">
        Section3
      </div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FullPage from 'vue-fullpage.js'
export default {
  name: 'home',
  components: {
    HelloWorld,
    FullPage
  },
  data() {
      return {
        options: {
          paddingTop: '30px',
          sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
        },
      }
    },
    destroyed() {
      $.fn.fullpage.destroy('all');
    }
}
</script>
<style>
.home>div:nth-child(1){
  background: gray;
}
.home>div:nth-child(2){
  background: yellow;
}
.home>div:nth-child(3){
  background: green;
}
  .section{
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
</style>
