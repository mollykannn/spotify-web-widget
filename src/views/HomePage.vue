<script>
import { useRouter } from 'vue-router'
import SpotifyWidget from '@/components/spotifyWidget.vue'
import { ref, provide } from 'vue'

export default {
  components: {
    SpotifyWidget,
  },
  setup() {
    const router = useRouter()
    provide('spotifyID', ref(''))
    const { Login } = LoginSetting(router)
    return {
      Login,
    }
  },
}

function LoginSetting(router) {
  const Login = () => {
    let CLIENT_ID = '04215351afb246e0aba60199b1c46747'
    let REDIRECT_URI = 'http://localhost:3000/spotify-web-widget/#/vertify'
    let url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=user-library-read&response_type=token`
    window.addEventListener(
      'message',
      function (event) {
        let hash = JSON.parse(event.data)
        if (hash.type !== 'access_token') {
          return
        }
        sessionStorage.setItem('access_token', hash.access_token)
        router.push('/details')
      },
      false
    )
    window.open(url, 'Spotify', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=750, height=730, top=0, left=0')
  }
  return { Login }
}
</script>

<template>
  <div class="title-column">
    <h1 class="title">Spotify Web Widget</h1>
    <h2 class="title-description" id="title-description">
      To use search tools, Please
      <button class="login-button" @click="Login">Login</button> first.
    </h2>
  </div>
  <SpotifyWidget></SpotifyWidget>
  <footer class="footer">
    Created by
    <a href="https://github.com/mollykannn">Molly Kan</a>
    <br />
    Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from
    <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  </footer>
</template>
