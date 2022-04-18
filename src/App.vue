<template>
  <div class="container">
    <div class="switch-column">
      <label class="switch">
        <input type="checkbox" v-on:click="isDark = !isDark" :checked="isDark" />
        <span class="slider"></span>
      </label>
    </div>
    <router-view />
    <footer class="footer">
      Created by
      <a href="https://github.com/mollykannn">Molly Kan</a>
      <br />
      Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from
      <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </footer>
  </div>
</template>
<script>
import { initStore } from '@/store/store'
import useMode from './assets/js/isDark.js'

export default {
  setup() {
    const isDark = useMode()
    initStore()
    return {
      isDark,
    }
  },
}
</script>
