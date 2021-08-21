<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Chargepage/>
    <router-view/>
  </div>
</template>

<script>
import Chargepage from '@/components/Chargepage'

export default {
  components: {
    Chargepage
  }
}
</script>

<style lang="scss" src="./scss/main.scss"></style>
