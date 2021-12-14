<template>
  <div>
    <NuxtLink to="/">&lt;-- Back to Home Page</NuxtLink>.
    <h1>About Leaderboard Visualiser for Advent of Code</h1>
    <p>
      <a href="https://adventofcode.com">Advent of Code</a> is an Advent calendar
      of small programming puzzles for a variety of skill sets and skill levels
      that can be solved in any programming language you like. People use them as
      a speed contest, interview prep, company training, university coursework,
      practice problems, or to challenge each other.
    </p>

    <p>
      In addition to a global leaderboard that fills up in about 10 minutes each
      account also has a private leaderboard connected to it. Different people
      solve the problems in different ways and at different times. I thought it
      was interesting enough to plot some graphs on how exactly the solving times
      differ between members of the same leaderboard.
    </p>
    <h2> Technical information </h2>
    <p>
      This is a frontend-only app written in <a href="https://nuxtjs.org/">Nuxt</a>.
      It uses your browser's Indexed Database to store any data it persists over refreshes.
      For charting the site uses <a href="https://www.highcharts.com/">highcharts</a>.
    </p>
    <p>
      The code for this project is hosted on
      <a href="https://github.com/MKolman/aoc-vis">github.com/MKolman/aoc-vis</a>. All the
      generated static files are hosted on the
      <a href="https://github.com/MKolman/aoc-vis/tree/gh-pages">branch gh-pages</a> and served
      using Github Pages.
    </p>
    <h1>TODO</h1>
    <ul>
      <li> Add lazy loading for components.</li>
    </ul>
  </div>
</template>
