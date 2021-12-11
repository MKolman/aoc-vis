<template>
  <div id="wrapper">
    <h1>--- Leaderboard Visualizer ---</h1>
    <DataParser @load="stars = $event"/>
    <StarGraphs :data="stars"/>
    <br>
    <TimeGraphs :data="stars"/>
    <br>
    <ProgressGraphs :data="stars"/>
    <br>
    <h1>--- TODO ---</h1>
    <ul>
      <li> Add stars scatter plot to first graph to indicate which stars are won.</li>
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
  body, textarea {
    background: #0f0f23;
    color: #ccc;
    font-family: "Source Code Pro", monospace;
    font-size: 14pt;
  }

  textarea {
    border: 1px solid #333340;
    background: #10101a;
    width: 100%;
    height: 10em;
  }

  button {
    background: none;
    border: none;
    font: inherit;
    padding: 0;
  }

  a, .a, button {
    outline: 0;
    text-decoration: none;
    color: #090;
    overflow-wrap: break-word;
    cursor: pointer;

    &:hover, &:focus {
      color: #9f9;
    }
  }


  h1, h2 {
    font-size: 1em;
    font-weight: normal;
    color: #fff;
  }

  #wrapper {
    max-width: 900px;
    margin: auto;
  }

  .muted {
    opacity: 0.5;
  }

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
