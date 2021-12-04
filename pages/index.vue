<template>
  <div id="wrapper">
    <h1>--- Leaderboard Visualizer ---</h1>
    <DataParser/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
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
