<template>
  <div>
    <md-steppers>
      <md-step id="first" md-label="Primeira Etapa">
        <br>
        <h3>Quais tipos de projetos você precisa?</h3>
        <br>
        <Checkbox />
      </md-step>

      <md-step id="second" md-label="Segunda Etapa">
        <MdInputTextArea />
        <MdFormsFile />
      </md-step>

      <md-step id="third" md-label="Terceira Etapa">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
      
      </md-step>

      <md-step id="four" md-label="Quarta Etapa">
        <MdFormsInput />

      </md-step>

      <md-step id="five" md-label="Última Etapa">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
import Checkbox from './MdCheckbox'
import MdInputTextArea from './MdInputTextArea'
import MdFormsSelect from './MdFormsSelect'
import MdFormsInput from './MdFormsInput'
import MdFormsFile from './MdFormsFile'

  export default {
    name: 'StepperHorizontal',
    components: {
      Checkbox,
      MdFormsSelect,
      MdFormsInput,
      MdFormsFile,
      MdInputTextArea
    }
  }
</script>