<template>
  <div id="div-m" style="text-shadow: 1px 1px 2px #333; height:800px">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333; "
                controls
                indicators
                background="#00BCD4"
                color="black"
                :interval="800000000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide style="" caption="1/5" img-blank img-alt="Blank image"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >fdsfsfs</b-carousel-slide>

      <b-carousel-slide caption="2/5" img-blank >
        <Checkbox />
        <hr>
        
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide caption="3/5" img-blank img-alt="Blank image">
        <TextArea />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
        <FormFile />
      </b-carousel-slide>

      <b-carousel-slide caption="4/5" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="5/5" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>

  </div>
</template>

<style>


@media (min-width: 1281px) {
  #div-m {
    background-color: blue;
  }
}
@media (min-width: 1025px) and (max-width: 1280px) {
  #div-m {
    background-color:red;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  #div-m {
    background-color:red;
  }
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

}
@media (min-width: 481px) and (max-width: 767px) {


}
@media (min-width: 320px) and (max-width: 480px) {
  
  #div-m {
    background-color:red;
  }
  #carousel1 {
    background-color:red;
  }
}



</style>
<script>
import Checkbox from './checkbox'
import Form from './form'
import TextArea from './textArea'
import FormFile from './formFile'

export default {
  components: {
    Checkbox,
    Form,
    FormFile,
    TextArea
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>