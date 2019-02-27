<template>
  <div class="home">
    <full-page :options="options">

      <div class="section">
        <b-container fluid class="bv-example-row">
          <b-row>
            <b-col id="col-1" style="background-color: #651fff; color: #fff;" sm="12" md="12" lg="6" xl="6">
              <Cards />
            </b-col>
            <b-col id="col-2" style="background-color: #fff;" sm="12" offset-sm="12" md="12" lg="6" xl="6">
              <Steppers />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="section2" id="section-typeform">
        Section2


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
import Cards from './material-design/MdCard'
import Checkbox from './material-design/MdCheckbox'
import Header from './material-design/MdHeader'
import FormFile from './material-design/MdFormsFile'
import TextArea from './material-design/MdInputTextArea'
import TypeformEmbed from '@typeform/embed'
import Steppers from './material-design/MdSteppers'
import FullPage from 'vue-fullpage.js'

export default {
  name: 'home',
  components: {
    Checkbox,
    Cards,
    TypeformEmbed,
    FormFile,
    Steppers,
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


<script src="https://embed.typeform.com/embed.js" type="text/javascript"></script>
  <script type="text/javascript">
    window.addEventListener("DOMContentLoaded", function() {
      var el = document.getElementById("section-typeform");
      
      // When instantiating a widget embed, you must provide the DOM element
      // that will contain your typeform, the URL of your typeform, and your
      // desired embed settings
      window.typeformEmbed.makeWidget(el, "https://admin.typeform.com/to/cVa5IG", {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    });
  </script>



<style>
  .md-layout-item {
    height: 40px;

    &:nth-child(1) {
      background: md-get-palette-color(grey, 300);
    }

    &:nth-child(2) {
      background: md-get-palette-color(grey, 400);
    }

    &:nth-child(3) {
      background: md-get-palette-color(grey, 500);
    }
  }

.right-div{
  padding:200px; 
}
.bv-example-row #col-1 {
  color: #00BCD4;
  margin-top: 0.00005%;
  height: 968px;
  padding: 10%;
}
.bv-example-row #col-2 {
  padding: 20px;
  margin-top: 4%;
  background-color: red;

}
.bv-example-row {
  height: 100%;

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
