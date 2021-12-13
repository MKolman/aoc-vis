<template>
<div>
  <div v-if="showForm" id="cookie">
    <button class="muted" @click="toggleForm">[X]</button>
    Allow cookies for Google analytics
    <span class="btns">
      <button @click="giveConsent">[Allow]</button>
      <button class="muted" @click="removeConsent">[No]</button>
    </span>
  </div>
  <div v-if="!showForm && inEU" id="smallCookie">
    <button title="Cookies" class="muted" @click="toggleForm">[C]</button>
  </div>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-42885055-7"></script>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  // @ts-ignore
  function gtag(){window.dataLayer.push(arguments);}
  if (process.client) {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    if (isEU() && !hasConsent()) {
      // @ts-ignore
      gtag('consent', 'default', {'analytics_storage': 'denied'});
    }
    // @ts-ignore
    gtag('js', new Date());
    // @ts-ignore
    gtag('config', 'UA-42885055-7');
  }


  const COOKIE_CONSENT_KEY = 'cookieConsent'

  function isEU(): boolean {
    const tz = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone
    const EU = [
      'Europe/Vienna', 'Europe/Brussels', 'Europe/Sofia', 'Europe/Zagreb', 'Asia/Famagusta',
      'Asia/Nicosia', 'Europe/Prague', 'Europe/Copenhagen', 'Europe/Tallinn',
      'Europe/Helsinki', 'Europe/Paris', 'Europe/Berlin', 'Europe/Busingen', 'Europe/Athens',
      'Europe/Budapest', 'Europe/Dublin', 'Europe/Rome', 'Europe/Riga', 'Europe/Vilnius',
      'Europe/Luxembourg', 'Europe/Malta', 'Europe/Amsterdam', 'Europe/Warsaw',
      'Atlantic/Azores', 'Atlantic/Madeira', 'Europe/Lisbon', 'Europe/Bucharest',
      'Europe/Bratislava', 'Europe/Ljubljana', 'Africa/Ceuta', 'Atlantic/Canary',
      'Europe/Madrid', 'Europe/Stockholm',
    ]
    return !tz || EU.includes(tz)
  }

  function hasConsent(): boolean {
    return !!localStorage.getItem(COOKIE_CONSENT_KEY)
  }

  function enableGA() {
    // @ts-ignore
    gtag('consent', 'update', {'analytics_storage': 'granted'})
  }

  function giveConsent() {
    localStorage.setItem(COOKIE_CONSENT_KEY, Date.now().toString())
    enableGA()
  }

  function removeConsent() {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    // @ts-ignore
    gtag('consent', 'update', {'analytics_storage': 'denied'})
  }

  export default Vue.extend({
    data() {
      return {
        inEU: false,
        showForm: false,
      }
    },
    created() {
      if (!process.client) return
      this.inEU = isEU()
      if (!this.inEU || hasConsent()) {
        enableGA()
      } else {
        this.showForm = true
      }
    },
    methods: {
      giveConsent() {
        this.showForm = false
        giveConsent()
      },
      removeConsent() {
        this.showForm = false
        removeConsent()
      },
      toggleForm() {
        this.showForm = !this.showForm
      },
    },
  })

</script>

<style lang="scss">
  #smallCookie {
    position: fixed;
    left: 0;
    bottom: 0;
  }

  #cookie {
    position: fixed;
    left: 0;
    bottom: 0;
    background: black;
    padding: 0.5em;

    .btns {
      margin-left: 1em;
      display: inline;
      white-space: nowrap;
      float: right;
    }
  }
</style>
