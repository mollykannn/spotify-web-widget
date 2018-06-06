<template>
  <div class="container">
    <div class="column-left" id="column-left">
      <div class="title-column">
        <h1 class="title">Spotify Web Widget</h1>
        <h2 class="title-description" id="title-description">To use search tools, Please
          <button class="login-button" v-on:click="greet">Login</button> first.</h2>
      </div>
      <div id="search-tool">
        <input type="text" class="input-search" v-model="query" v-on:keyup.enter="searchbutton" placeholder="Search Music">
        <div class="container-album">
          <div class="list-title-column">
            <h3 class="album-title">{{albumTitle}}
              <span class="count">({{dataAlbum.offset + 1}} - {{((dataAlbum.limit + dataAlbum.offset) > dataAlbum.total) ? dataAlbum.total
                : dataAlbum.limit + dataAlbum.offset}} of {{dataAlbum.total}})</span>
            </h3>
            <div class="previous-next-column">
              <a href="#" v-on:click.prevent="previous_next_album(listType,dataAlbum.limit, (dataAlbum.offset-dataAlbum.limit))" v-show="dataAlbum.previous != null"
                class="previous">&laquo; Previous</a>
              <a href="#" v-on:click.prevent="previous_next_album(listType,dataAlbum.limit, (dataAlbum.offset+dataAlbum.limit))" v-show="dataAlbum.next != null"
                class="next">Next &raquo;</a>
            </div>
          </div>
          <div v-for="data in dataAlbum.items" :key="data.value" class="album">
            <div v-if="data.album">
              <a href="#" type="button" v-on:click.prevent="iframe(data.album.uri)">
                <div class="album-image">
                  <img :src="data.album.images[0].url" />
                </div>
                <div class="album-text">
                  <div class="name">{{data.album.name}}</div>
                  <div class="description">{{data.album.artists[0].name}}</div>
                </div>
              </a>
            </div>
            <div v-else>
              <a href="#" type="button" v-on:click.prevent="iframe(data.uri)">
                <div class="album-image">
                  <img :src="data.images[0].url" />
                </div>
                <div class="album-text">
                  <div class="name">{{data.name}}</div>
                  <div class="description">{{data.artists[0].name}}</div>
                </div>
              </a>
            </div>
          </div>
          <hr/>
        </div>
        <div class="container-playlist">
          <div class="list-title-column">
            <h3 class="playlist-title">{{playlistTitle}}
              <span class="count">({{dataPlaylist.offset + 1}} - {{((dataPlaylist.limit + dataPlaylist.offset) > dataPlaylist.total) ? dataPlaylist.total
                : dataPlaylist.limit + dataPlaylist.offset}} of {{dataPlaylist.total}})</span>
            </h3>
            <div class="previous-next-column">
              <a href="#" v-on:click.prevent="previous_next_playlist(listType,dataPlaylist.limit, (dataPlaylist.offset-dataPlaylist.limit))"
                v-show="dataPlaylist.previous != null" class="previous">&laquo; Previous</a>
              <a href="#" v-on:click.prevent="previous_next_playlist(listType,dataPlaylist.limit, (dataPlaylist.offset+dataPlaylist.limit))"
                v-show="dataPlaylist.next != null" class="next">Next &raquo;</a>
            </div>
          </div>
          <div v-for="data in dataPlaylist.items" :key="data.value" class="playlist">
            <a href="#" type="button" v-on:click.prevent="iframe(data.uri)">
              <div class="playlist-image">
                <img :src="data.images[0].url" />
              </div>
              <div class="playlist-text">
                <div class="name">{{data.name}}</div>
                <div class="description">{{data.owner.id}}</div>
              </div>
            </a>
          </div>
          <hr/>
        </div>
        <div class="container-track">
          <div class="list-title-column">
            <h3 class="track-title">{{trackTitle}}
              <span class="count">({{dataTrack.offset + 1}} - {{((dataTrack.limit + dataTrack.offset) > dataTrack.total) ? dataTrack.total
                : dataTrack.limit + dataTrack.offset}} of {{dataTrack.total}})</span>
            </h3>
            <div class="previous-next-column">
              <a href="#" v-on:click.prevent="previous_next_track(listType,dataTrack.limit, (dataTrack.offset-dataTrack.limit))" v-show="dataTrack.previous != null"
                class="previous">&laquo; Previous</a>
              <a href="#" v-on:click.prevent="previous_next_track(listType,dataTrack.limit, (dataTrack.offset+dataTrack.limit))" v-show="dataTrack.next != null"
                class="next">Next &raquo;</a>
            </div>
          </div>
          <div v-for="data in dataTrack.items" :key="data.value" class="track">
            <div v-if="data.track">
              <a href="#" type="button" class="track-href" v-on:click.prevent="iframe(data.track.uri)">
                <div class="track-image">
                  <img :src="data.track.album.images[0].url" />
                </div>
                <div class="track-text">
                  <div class="name">{{data.track.name}}</div>
                  <div class="description">{{data.track.artists[0].name}}</div>
                </div>
              </a>
            </div>
            <div v-else>
              <a href="#" type="button" class="track-href" v-on:click.prevent="iframe(data.uri)">
                <div class="track-image">
                  <img :src="data.album.images[0].url" />
                </div>
                <div class="track-text">
                  <div class="name">{{data.name}}</div>
                  <div class="description">{{data.artists[0].name}}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column-right" id="column-right">
      <div class="widget" id="widget">
        <iframe :src="'https://open.spotify.com/embed?uri=' + iframeUrl" :width="width" :height="inputHeight"
          frameborder="0" allowtransparency="true" allow="encrypted-media" :style="minHeight + ';' + maxWidth"></iframe>
      </div>
      <div class="setting-code-column">
        <div class="setting">
          <div class="setting-column">
            <label>Size:</label>
            <input type="radio" id="small" value="small" v-model="pickedHeight" v-on:click="set_size">
            <label for="small">Small</label>
            <input type="radio" id="large" value="large" v-model="pickedHeight" v-on:click="set_size">
            <label for="large">Large</label>
          </div>
          <div class="setting-column">
            <label>Responsive:</label>
            <input type="radio" id="true" value="true" v-model="pickedResponsive" v-on:click="responsive('true')">
            <label for="true">True</label>
            <input type="radio" id="false" value="false" v-model="pickedResponsive" v-on:click="responsive('false')">
            <label for="false">False</label>
          </div>
          <div class="setting-column" v-show="isWidth">
            <label>Width:</label>
            <input v-model="inputWidth" type="number" id="width" v-on:change="set_width">
          </div>
          <div class="setting-column" v-show="isMaxWidth">
            <label>Max-Width:</label>
            <input v-model="inputMaxwidth" type="number" id="max-width" v-on:change="set_maxwidth">
          </div>
          <div class="setting-column" v-show="isHeight">
            <label>Height:</label>
            <input v-model="inputHeight" type="number" id="height">
          </div>
          <div class="setting-column">
            <label>Spotify ID:</label>
            <input type="text" id="spotify-id" value="" v-model="iframeUrl">
          </div>
        </div>
        <div class="code">
          <code class="code-column">
            &lt;iframe src="https://open.spotify.com/embed?uri={{iframeUrl}}" width="{{width}}" height="{{inputHeight}}"
            frameborder="0" allowtransparency="true" allow="encrypted-media" style="{{minHeight}};{{maxWidth}}"&gt;&lt;/iframe&gt;
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpotifyWebApi from 'spotify-web-api-js'
var spotifyApi = new SpotifyWebApi()
export default {
  data () {
    return {
      dataAlbum: {},
      dataPlaylist: {},
      dataTrack: {},
      albumTitle: 'Saved Album',
      playlistTitle: 'Saved Playlist',
      trackTitle: 'Saved Track',
      listType: 'account',
      isHeight: true,
      isMaxWidth: true,
      isWidth: false,
      iframeUrl: 'spotify:user:kishidashigeru:playlist:6baJNqisPeIx5qVXLcQ9DE',
      inputHeight: '380',
      inputWidth: '300',
      pickedHeight: 'large',
      pickedResponsive: 'true',
      inputMaxwidth: '300',
      width: '100%',
      minHeight: 'min-height:280px',
      maxWidth: 'max-width:300px',
      search: [],
      query: ''
    }
  },
  methods: {
    responsive: function (message) {
      if (message === 'true') {
        this.maxWidth = 'max-width:' + this.inputMaxwidth + 'px'
        this.width = '100%'
        this.isMaxWidth = true
        this.isWidth = false
      } else {
        this.maxWidth = ''
        this.width = this.inputWidth + 'px'
        this.isMaxWidth = false
        this.isWidth = true
      }
    },
    set_width: function () {
      this.width = this.inputWidth + 'px'
    },
    set_maxwidth: function () {
      this.maxWidth = 'max-width:' + this.inputMaxwidth + 'px'
    },
    set_size: function () {
      if (this.pickedHeight === 'large') {
        this.inputHeight = '80'
        this.minHeight = ''
        this.isHeight = false
      } else {
        this.inputHeight = '380'
        this.minHeight = 'min-height:280px'
        this.isHeight = true
      }
    },
    greet: function (event) {
      var CLIENT_ID = '04215351afb246e0aba60199b1c46747'
      var REDIRECT_URI = 'https://mollykannn.github.io/spotify-web-widget/vue'
      function getLoginURL (scopes) {
        return (
          'https://accounts.spotify.com/authorize?client_id=' +
          CLIENT_ID +
          '&redirect_uri=' +
          encodeURIComponent(REDIRECT_URI) +
          '&scope=' +
          encodeURIComponent(scopes.join(' ')) +
          '&response_type=token'
        )
      }
      var url = getLoginURL(['user-library-read'])
      const vm = this
      window.addEventListener(
        'message',
        function (event) {
          var hash = JSON.parse(event.data)
          if (hash.type === 'access_token') {
            spotifyApi.setAccessToken(hash.access_token)
            document.getElementById('column-left').className += ' search-list'
            document.getElementById('column-right').className += ' widget-generator'
            document.getElementById('search-tool').style.display = 'inherit'
            document.getElementById('widget').style.margin = '0'
            document.getElementById('title-description').innerHTML = 'Get the Spotify Web Widget.'
            spotifyApi
              .getMySavedAlbums({
                limit: 12
              })
              .then(data => {
                vm.dataAlbum = Object.assign({}, vm.dataAlbum1, data)
              })
            spotifyApi
              .getUserPlaylists({
                limit: 4
              })
              .then(data => {
                vm.dataPlaylist = Object.assign({}, vm.dataPlaylist1, data)
              })
            spotifyApi
              .getMySavedTracks({
                limit: 6
              })
              .then(data => {
                vm.dataTrack = Object.assign({}, vm.dataTrack1, data)
              })
          }
        },
        false
      )
      window.open(
        url,
        'Spotify',
        'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=750, height=730, top=0, left=0'
      )
    },
    searchbutton: function (event) {
      if (this.searchCriteria.length > 0) {
        this.listType = 'search'
        this.albumTitle = 'Album'
        this.playlistTitle = 'Playlist'
        this.trackTitle = 'Track'
        document.getElementById('column-left').style.visibility = 'inherit'
        spotifyApi
          .searchAlbums(this.searchCriteria, {
            limit: 12
          })
          .then(data => {
            this.dataAlbum = Object.assign({}, this.dataAlbum1, data.albums)
          })
        spotifyApi
          .searchPlaylists(this.searchCriteria, {
            limit: 4
          })
          .then(data => {
            this.dataPlaylist = Object.assign({},
              this.dataPlaylist1,
              data.playlists
            )
          })
        spotifyApi
          .searchTracks(this.searchCriteria, {
            limit: 6
          })
          .then(data => {
            this.dataTrack = Object.assign({}, this.dataTrack1, data.tracks)
          })
      } else {
        spotifyApi
          .getMySavedAlbums({
            limit: 12
          })
          .then(data => {
            this.dataAlbum = Object.assign({}, this.dataAlbum1, data)
          })
        spotifyApi
          .getUserPlaylists({
            limit: 4
          })
          .then(data => {
            this.dataPlaylist = Object.assign({}, this.dataPlaylist1, data)
          })
        spotifyApi
          .getMySavedTracks({
            limit: 6
          })
          .then(data => {
            this.dataTrack = Object.assign({}, this.dataTrack1, data)
          })
      }
    },
    iframe: function (message) {
      this.iframeUrl = message
    },
    previous_next_album: function (listType, limitNumber, offsetNumber) {
      if (listType === 'account') {
        spotifyApi
          .getMySavedAlbums({
            limit: limitNumber,
            offset: offsetNumber
          })
          .then(data => {
            this.dataAlbum = Object.assign({}, this.dataAlbum1, data)
          })
      } else {
        spotifyApi
          .searchAlbums(this.searchCriteria, {
            limit: limitNumber,
            offset: offsetNumber
          })
          .then(data => {
            this.dataAlbum = Object.assign({}, this.dataAlbum1, data.albums)
          })
      }
    },
    previous_next_playlist: function (listType, limitNumber, offsetNumber) {
      if (listType === 'account') {
        spotifyApi
          .getUserPlaylists({
            limit: limitNumber,
            offset: offsetNumber
          })
          .then(data => {
            this.dataPlaylist = Object.assign({}, this.dataPlaylist1, data)
          })
      } else {
        spotifyApi
          .searchPlaylists(this.searchCriteria, {
            limit: limitNumber,
            offset: offsetNumber
          })
          .then(data => {
            this.dataPlaylist = Object.assign({},
              this.dataPlaylist1,
              data.playlists
            )
          })
      }
    },
    previous_next_track: function (listType, limitNumber, offsetNumber) {
      if (listType === 'account') {
        spotifyApi
          .getMySavedTracks({
            limit: limitNumber,
            offset: offsetNumber
          })
          .then(data => {
            this.dataTrack = Object.assign({}, this.dataTrack1, data)
          })
      } else {
        spotifyApi
          .searchTracks(this.searchCriteria, {
            limit: limitNumber,
            offset: offsetNumber
          })
          .then(data => {
            this.dataTrack = Object.assign({}, this.dataTrack1, data.tracks)
          })
      }
    }
  },
  computed: {
    searchCriteria: function () {
      if (this.query) {
        return this.search.concat(this.query)
      }
      return this.search
    }
  }
}
</script>

<style lang="scss">
  $Extra-large: "only screen and (max-width : 1200px)";
  $Large: "only screen and (max-width : 992px)";
  $Medium: "only screen and (max-width : 768px)";
  $Small: "only screen and (max-width : 650px)";

  .column-left {
    flex: 0 0 100%;

    &.search-list {
      flex: 1;
      margin-right: 25px;
      @media #{$Large} {
        flex: 0 0 100%;
      }
    }

    & .title-column {
      text-align: center;
      & .title {
        margin-bottom: 15px;
      }
      & .title-description {
        font-size: 1.2em;
        margin-bottom: 25px;
        color: #6b6b6b;
      }
      & .login-button {
        cursor: pointer;
        display: inline-block;
        padding: 0.2em 1em;
        background-color: #00c141;
        color: #ffffff;
        transition: 0.3s;
        &:hover {
          background-color: #008f30;
        }
      }
    }

    & #search-tool {
      display: none;
    }

    & .input-search {
      width: 100%;
      margin-bottom: 20px;
    }

    & .playlist-title,
    & .album-title,
    & .track-title {
      margin: 10px 0;
      flex: 1;
      & .count {
        margin-left: 5px;
        font-size: 75%;
        color: #6b6b6b;
      }
    }

    & .list-title-column {
      display: flex;
      flex: 0 0 100%;
      align-items: center;

      & .previous-next-column {
        flex: 0 0 150px;
        display: flex;

        & .next,
        & .previous {
          color: #6b6b6b;
          flex: 1;
        }

        & .next {
          text-align: right;
        }
      }
    }

    .container-track {
      display: flex;
      flex-wrap: wrap;
      text-align: left;
      margin-right: 10px;
      & .track {
        flex: 0 33.33%;
        display: flex;
        margin: 5px 0;
        @media #{$Small} {
          flex: 0 50%;
        }

        & .track-href {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        & .track-image {
          padding-left: 15px;
          flex: 0 0 60px;
          @media #{$Extra-large} {
            flex: 0 0 100%;
          }
          @media #{$Large} {
            flex: 0 0 60px;
          }
          @media #{$Small} {
            flex: 0 0 100%;
            padding: 0;
          }
          & img {
            width: 60px;
            @media #{$Extra-large} {
              height: 60px;
            }
            @media #{$Small} {
              width: 100%;
              height: auto;
              padding: 0 15px;
            }
          }
        }

        & .track-text {
          text-align: left;
          padding: 0 15px;
          word-break: break-word;
          flex: 1;
          & .description {
            font-size: 80%;
            color: #6b6b6b;
          }
        }
      }
    }

    .container-album {
      display: flex;
      flex-wrap: wrap;
      text-align: left;
      margin-right: 10px;
      & .album {
        flex: 0 25%;
        margin: 10px 0;
        @media #{$Small} {
          flex: 0 50%;
        }

        & .album-image {
          height: 145px;
          padding: 0 15px;
          @media #{$Extra-large} {
            height: 100px;
          }
          @media #{$Large} {
            height: 145px;
          }
          @media #{$Medium} {
            height: 125px;
          }
          @media #{$Small} {
            height: auto;
          }
          & img {
            max-width: 100%;
          }
        }

        & .album-text {
          padding: 0 15px;
          word-break: break-word;
          & .description {
            font-size: 80%;
            color: #6b6b6b;
          }
        }
      }
    }

    .container-playlist {
      display: flex;
      flex-wrap: wrap;
      text-align: left;
      margin-right: 10px;
      & .playlist {
        flex: 0 25%;
        margin: 10px 0;
        @media #{$Small} {
          flex: 0 50%;
        }

        & .playlist-image {
          height: 145px;
          padding: 0 15px;
          @media #{$Extra-large} {
            height: 100px;
          }
          @media #{$Large} {
            height: 145px;
          }
          @media #{$Medium} {
            height: 125px;
          }
          @media #{$Small} {
            height: auto;
          }
          & img {
            max-width: 100%;
          }
        }

        & .playlist-text {
          padding: 0 15px;
          word-break: break-word;
          & .description {
            font-size: 80%;
            color: #6b6b6b;
          }
        }
      }
    }
  }

  .column-right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 0 0 100%;

    &.widget-generator {
      flex: 0 0 400px;
      display: block;
      @media #{$Large} {
        margin-top: 50px;
        flex: 0 0 100%;
      }
    }

    & .widget {
      flex: 0 0 450px;
      margin-right: 25px;
      text-align: center;

      @media #{$Large} {
        flex: 0 0 100%;
      }
    }

    & .setting-code-column {
      flex: 1;

      .setting {
        position: relative;
        border: 1px solid #000;
        padding: 15px;
        margin-top: 15px;

        &:before {
          content: "Setting";
          font-family: "PingFang TC", "Heiti TC", "Microsoft JhengHei", Arial, Helvetica,
          sans-serif;
          position: absolute;
          top: -16px;
          left: 15px;
          padding: 0 15px;
          background-color: #ffffff;
          font-size: 20px;
        }

        & .setting-column {
          margin: 3px 0;

          & input[type="number"],
          & input[type="text"] {
            width: calc(100% - 90px);
          }
        }
      }

      .code {
        position: relative;
        border: 1px solid #000;
        padding: 15px;
        margin-top: 30px;

        &:before {
          content: "Embed Code";
          font-family: "PingFang TC", "Heiti TC", "Microsoft JhengHei", Arial, Helvetica,sans-serif;
          position: absolute;
          top: -16px;
          left: 15px;
          padding: 0 15px;
          background-color: #ffffff;
          font-size: 20px;
        }

        & .code-column {
          margin-top: 5px;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
          display: block;
          word-break: break-word;
          font-size: 85%;
          padding: 15px;
          background-color: #f6f8fa;
        }
      }
    }
  }
</style>
