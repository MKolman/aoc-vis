<template>
  <div id="wrapper">
    <Nuxt />
    <footer>
      <span class="muted">-----</span>
      <br>
      Made by <a href="https://www.kolman.si">Maks Kolman</a>.
      Hosted on <a href="https://github.com/mkolman/aoc-vis">GitHub</a>.
      Read more <NuxtLink to="/about">about the page</NuxtLink>.
    </footer>
    <br>
    <client-only> <CookieChecker/> </client-only>
  </div>
</template>
