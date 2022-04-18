<script>
import SpotifyWebApi from 'spotify-web-api-js'
import { reactive } from 'vue'
import { getSpotifyAPI } from '@/assets/js/main.js'
import SpotifyWidget from '@/components/spotifyWidget.vue'
import ListColumn from '@/components/listColumn.vue'

export default {
  components: {
    SpotifyWidget,
    ListColumn,
  },
  setup() {
    let getInitial = [
      ['getMySavedAlbums', 8, 0],
      ['getUserPlaylists', 4, 0],
      ['getMySavedTracks', 8, 0],
    ]
    let getSearch = [
      ['searchAlbums', 8, 0],
      ['searchPlaylists', 4, 0],
      ['searchTracks', 8, 0],
    ]
    let search = reactive({
      data: '',
      Submit: () => {
        data.GetData(...(search.data == '' ? getInitial : getSearch))
      },
    })
    let data = reactive({
      album: {},
      playlist: {},
      saveTracks: {},
      GetData: async (...arg) => {
        let promiseSpotifyAPI = arg.map((element) => getSpotifyAPI(...element, search.data))
        let results = await Promise.all(promiseSpotifyAPI)
        results.forEach((res) => {
          if (['getMySavedAlbums', 'searchAlbums'].includes(res.listType)) {
            data.album = res
          } else if (['getUserPlaylists', 'searchPlaylists'].includes(res.listType)) {
            data.playlist = res
          } else if (['getMySavedTracks', 'searchTracks'].includes(res.listType)) {
            data.saveTracks = res
          }
        })
      },
    })
    // Initial
    const spotifyApi = new SpotifyWebApi()
    spotifyApi.setAccessToken(sessionStorage.getItem('access_token'))
    data.GetData(...getInitial)

    return {
      search,
      data,
    }
  },
}
</script>
<template>
  <div class="d-flex mb-6">
    <div class="column-search">
      <div class="title-column">
        <h1 class="title mb-2">Spotify Web Widget</h1>
        <h2 class="title-description mb-6" id="title-description">Get the Spotify Web Widget.</h2>
      </div>
      <div id="search-tool">
        <input type="text" class="input-search mb-6" v-model="search.data" @keyup.enter="search.Submit()" placeholder="Search Music" />
        <ListColumn :datas="data.album" @Paglication="data.GetData"></ListColumn>
        <ListColumn :datas="data.playlist" @Paglication="data.GetData"></ListColumn>
        <ListColumn :datas="data.saveTracks" @Paglication="data.GetData"></ListColumn>
      </div>
    </div>
    <SpotifyWidget page="details-page"></SpotifyWidget>
  </div>
</template>
