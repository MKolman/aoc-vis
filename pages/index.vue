<template>
  <div id="wrapper">
    <h1>--- Leaderboard Visualizer for Advent of Code ---</h1>
    <DataParser @load="stars = $event"/>
    <StarGraphs :data="stars"/>
    <br>
    <TimeGraphs :data="stars"/>
    <br>
    <ProgressGraphs :data="stars"/>
    <br>
    <h1>--- TODO ---</h1>
    <ul>
      <li> Add about page.</li>
    </ul>
    <footer>
      Made by <a href="https://www.kolman.si">Maks Kolman</a>.
      Hosted on <a href="https://github.com/mkolman/aoc-vis">GitHub</a>.
    </footer>
    <client-only> <CookieChecker/> </client-only>
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
