<template>
  <div>
    <md-steppers>
      <md-step id="first" md-label="What your poject need?">
        <Checkbox />
      </md-step>

      <md-step id="second" md-label="Second Step">
        <MdInputTextArea />
          Optional file upload
        <p>
(Files accepted: gif, jpg, jpeg, .png, .pdf - Max file size: 50k for demo purpose, you can increase based on your host settings.)
        </p>
        <MdFormsFile />
      </md-step>

      <md-step id="third" md-label="Third Step">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
      </md-step>

      <md-step id="four" md-label="Third Step">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
      </md-step>

      <md-step id="five" md-label="Third Step">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
import Checkbox from './../checkbox'
import MdInputTextArea from './MdInputTextArea'
import MdFormsFile from './MdFormsFile'

  export default {
    name: 'StepperHorizontal',
    components: {
      Checkbox,
      MdFormsFile,
      MdInputTextArea
    }
  }
</script>