<template>
  <div id="wrapper">
    <h1>--- Leaderboard Visualizer ---</h1>
    <DataParser @load="stars = $event"/>
    <StarGraphs :data="stars"/>
    <br>
    <TimeGraphs :data="stars"/>
    <br>
    <h1>--- TODO ---</h1>
    <ul>
      <li> Use dark mode for graphs.</li>
      <li> Add stars scatter plot to first graph to indicate which stars are won.</li>
      <li> Add a new graph: total stars won vs. time (per day + average).</li>
      <li> Use local storage to persist JSON data.</li>
      <li> Updated the sample link to show the link to the pasted leaderboard.</li>
      <li> Change icon.</li>
      <li> Deploy to GitHub Pages.</li>
    </ul>
    <footer>
      Made by <a href="https://www.kolman.si">Maks Kolman</a>.
      Hosted on <a href="https://github.com/mkolman/aoc-vis">GitHub</a>.
    </footer>
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

  a {
    outline: 0;
    text-decoration: none;
    color: #090;
    overflow-wrap: break-word;

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
</style>
