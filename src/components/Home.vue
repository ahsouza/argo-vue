<template>
  <div class="home">
    <full-page :options="options">

      <div class="section">
        <b-container fluid class="bv-example-row">
          <b-row>
            <b-col id="col-1" style="background-color: #651fff; color: #fff;" sm="6" md="6">
              <MdCards />
            </b-col>
            <b-col id="col-2" style="background-color: #fff;" sm="5" offset-sm="6" md="6" offset-md="0">
              <MdSteppers />
              
            </b-col>
          </b-row>
        </b-container>

      </div>
      <div class="section">
        <Carousel />
      </div>
      <div class="section">
        Section3
      </div>
      <div class="section">
        Section4
      </div>
    </full-page>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Checkbox from './checkbox'
import Form from './form'
import TextArea from './textArea'
import FormFile from './formFile'
import Carousel from './carousel'
import Progress from './progress'
import MdCards from './MdCards'
import MdSteppers from './material-design/MdSteppers'
import MdInput from './MdCards'
import FullPage from 'vue-fullpage.js'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Checkbox,
    FormFile,
    MdSteppers,
    MdCards,
    MdInput,
    Carousel,
    Form,
    TextArea,
    FullPage
  },
  data() {
      return {
        options: {
          paddingTop: '2px',
          sectionsColor: ['#651fff', '#ccff90', '#4fc3f7', '#651fff'],
        },
      }
    },
    destroyed() {
      $.fn.fullpage.destroy('all');
    }
}
</script>
<style>
.right-div{
  padding:200px; 
}
#col-1 {
  background-color: #fff;
;  color: #00BCD4;
}
#col-2 {
  background-color: #fff;
}
.home>div:nth-child(1){
  background: #fff;
}
.home>div:nth-child(2){
  background: yellow;
}
.home>div:nth-child(3){
  background: green;
}
.home>div:nth-child(4){
  background: green;
}
  .section{
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
</style>
