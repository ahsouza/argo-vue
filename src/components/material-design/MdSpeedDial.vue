<template>
  <div class="example">
    <md-speed-dial :class="bottomPosition">
      <md-speed-dial-target class="animated fadeInRight">
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>note</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'PositionDirection',
  data: () => ({
    topPosition: 'md-top-left',
    bottomPosition: 'md-bottom-right'
  })
}
</script>

<style lang="scss" scoped>
  .example {
    min-height: 300px;
  }
  .demo-option {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    div {
      margin: 0 6px;
      display: flex;
      flex-direction: column;
    }
  }
</style>