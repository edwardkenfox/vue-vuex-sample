<template>
  <div id="app">
    <vue-header></vue-header>
    <timeline></timeline>
  </div>
</template>

<script>
import VueHeader from './components/Header'
import Timeline from './components/Timeline'

export default {
  components: {
    VueHeader,
    Timeline
  }
}
</script>

<style>
</style>
