<script>
import { useRouter } from 'vue-router'
import SpotifyWidget from '@/components/spotifyWidget.vue'

export default {
  components: {
    SpotifyWidget,
  },
  setup() {
    const router = useRouter()
    const Login = () => {
      let CLIENT_ID = '04215351afb246e0aba60199b1c46747'
      let REDIRECT_URI = 'https://mollykannn.github.io/spotify-web-widget/#/vertify'
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
    return {
      Login,
    }
  },
}
</script>

<template>
  <div class="title-column">
    <h1 class="title mb-2">Spotify Web Widget</h1>
    <h2 class="title-description mb-6" id="title-description">
      To use search tools, Please
      <button class="primary" @click="Login">Login</button> first.
    </h2>
  </div>
  <SpotifyWidget class="mb-6"></SpotifyWidget>
</template>
