<template>
  <div>
    <h1>Leaderboard Visualiser for Advent of Code</h1>
    <DataParser @load="stars = $event"/>
    <StarGraphs :data="stars"/>
    <br>
    <TimeGraphs :data="stars"/>
    <br>
    <ProgressGraphs :data="stars"/>
    <br>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        stars: [],
      }
    },
  })
</script>

<style lang="scss">
  .toast {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    padding: 0.5em;
    margin: 0.5em;
    opacity: 0;
    border: 1px solid #ccc;
    animation: toast var(--ani-time, 2000ms) linear;
  }

  @keyframes toast {
    0% {
      opacity: 1;
      transform: translate(-50%, 100%);
    }

    5%,80% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    100% { opacity: 0 }
  }
</style>
