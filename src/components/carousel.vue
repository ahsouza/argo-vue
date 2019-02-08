<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#00BCD4"
                color="black"
                :interval="20000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide style="" caption="1/5" img-blank img-alt="Blank image"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >fdsfsfs</b-carousel-slide>

      <!-- Slides with custom text -->
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