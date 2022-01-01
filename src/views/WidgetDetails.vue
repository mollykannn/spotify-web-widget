<script>
import SpotifyWebApi from 'spotify-web-api-js'
import { ref, provide, computed } from 'vue'
import { previousNextAlbum } from '@/assets/js/main.js'
import SpotifyWidget from '@/components/spotifyWidget.vue'
import ListColumn from '@/components/listColumn.vue'

export default {
  components: {
    SpotifyWidget,
    ListColumn,
  },
  setup() {
    let searchData = ref('')
    let { InitalSpotifyID, EditSpotifyID } = SpotifyIDSetting()
    let { dataAlbum, dataPlaylist, dataSaveTracks, GetSpotifyAPI } = Initial(searchData)
    const Search = () => {
      searchData.value == ''
        ? GetSpotifyAPI(['getMySavedAlbums', 8, 0], ['getUserPlaylists', 4, 0], ['getMySavedTracks', 8, 0])
        : GetSpotifyAPI(['searchAlbums', 8, 0], ['searchPlaylists', 4, 0], ['searchTracks', 8, 0])
    }

    // Initial
    InitalSpotifyID()
    GetSpotifyAPI(['getMySavedAlbums', 8, 0], ['getUserPlaylists', 4, 0], ['getMySavedTracks', 8, 0])

    return {
      searchData,
      dataAlbum,
      dataPlaylist,
      dataSaveTracks,
      EditSpotifyID,
      Search,
      GetSpotifyAPI,
    }
  },
}

function SpotifyIDSetting() {
  let spotifyID = ref('')
  const InitalSpotifyID = () => {
    const spotifyApi = new SpotifyWebApi()
    spotifyApi.setAccessToken(sessionStorage.getItem('access_token'))
    provide(
      'spotifyID',
      computed(() => spotifyID.value ?? '')
    )
  }
  const EditSpotifyID = (id) => {
    spotifyID.value = id
  }

  return {
    InitalSpotifyID,
    EditSpotifyID,
  }
}

function Initial(searchData) {
  let dataAlbum = ref()
  let dataPlaylist = ref()
  let dataSaveTracks = ref()

  const GetSpotifyAPI = (...arg) => {
    arg.forEach((e) => {
      let [listType, limitNumber, offsetNumber] = e
      previousNextAlbum(listType, limitNumber, offsetNumber, searchData.value).then((res) => {
        if (['getMySavedAlbums', 'searchAlbums'].includes(listType)) {
          dataAlbum.value = res
        } else if (['getUserPlaylists', 'searchPlaylists'].includes(listType)) {
          dataPlaylist.value = res
        } else if (['getMySavedTracks', 'searchTracks'].includes(listType)) {
          dataSaveTracks.value = res
        }
      })
    })
  }
  return {
    dataAlbum,
    dataPlaylist,
    dataSaveTracks,
    GetSpotifyAPI,
  }
}
</script>
<template>
  <div class="column-search">
    <div class="title-column">
      <h1 class="title">Spotify Web Widget</h1>
      <h2 class="title-description" id="title-description">Get the Spotify Web Widget.</h2>
    </div>
    <div id="search-tool">
      <input type="text" class="input-search" v-model="searchData" v-on:keyup.enter="Search()" placeholder="Search Music" />
      <ListColumn :datas="dataAlbum" :EditSpotifyID="EditSpotifyID" :Paglication="GetSpotifyAPI"></ListColumn>
      <ListColumn :datas="dataPlaylist" :EditSpotifyID="EditSpotifyID" :Paglication="GetSpotifyAPI"></ListColumn>
      <ListColumn :datas="dataSaveTracks" :EditSpotifyID="EditSpotifyID" :Paglication="GetSpotifyAPI"></ListColumn>
    </div>
  </div>
  <SpotifyWidget page="details-page"></SpotifyWidget>
  <footer class="footer">
    Created by
    <a href="https://github.com/mollykannn">Molly Kan</a>
    <br />
    Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from
    <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  </footer>
</template>
