<template>
<div id="app">
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary" style="background-color: #311b92;">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>

      <md-button class="md-icon-button" style="margin-left: 20%;">
        <span style="font-size: 22px;">
          <i class="fab fa-facebook-square"></i>
        </span>
      </md-button>
      <md-button class="md-icon-button" >
        <span style="font-size: 22px;">
          <i class="fab fa-twitter"></i>
        </span>  
      </md-button>
      
      <md-button class="md-icon-button" >
        <span style="font-size: 22px;">
          <i class="fab fa-google"></i>
        </span>  
      </md-button>


      <div class="md-toolbar-section-end">
        <md-button @click="showSidepanel = true"><md-icon>contacts</md-icon></md-button>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Argo Vue</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-drawer class="md-right" :md-active.sync="showSidepanel">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Favorites</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <span class="md-list-item-text">Abbey Christansen</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Alex Nelson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Mary Johnson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <router-view/>
    </md-content>
  </div>
      <MdSpeedDial />


  </div>
</template>

<script>
import MdSpeedDial from './components/material-design/MdSpeedDial'

  export default {
    name: 'Temporary',
    components: {
      MdSpeedDial
  },
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    })
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .md-primary {

  }
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
  }
</style>
