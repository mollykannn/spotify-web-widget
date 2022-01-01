import SpotifyWebApi from 'spotify-web-api-js'
let spotifyApi = new SpotifyWebApi()

function setData(listType, data) {
  data = listType.indexOf('search') >= 0 ? data[listType.replace('search','').toLowerCase()] : data
  return {
    title: `${listType.indexOf('get') >= 0 ? 'Saved ' : ''}${
      listType.indexOf('Album') >= 0
        ? 'Album'
        : listType.indexOf('Playlist') >= 0
        ? 'Playlist'
        : 'Track'
    }`,
    listType: listType,
    previous: data.previous,
    next: data.next,
    offset: data.offset,
    limit: data.limit,
    total: data.total,
    first: data.offset + 1,
    last: data.limit + data.offset > data.total ? data.total : data.limit + data.offset,
    items: data.items.map((data) => {
      if (['getMySavedAlbums', 'searchAlbums'].includes(listType)) {
        data = listType == 'getMySavedAlbums' ? data.album : data
      } else if (['getUserPlaylists', 'searchPlaylists'].includes(listType)) {
        data.artists = [{ name: data.owner.display_name }]
      } else if (['getMySavedTracks', 'searchTracks'].includes(listType)) {
        data = listType == 'getMySavedTracks' ? data.track : data
        data.images = [{ url: data.album.images[0].url }]
      }
      return data
    }),
  }
}

export function previousNextAlbum(listType, limitNumber, offsetNumber, searchCriteria = '') {
  return new Promise((resolve) => {
    let data = listType.indexOf('get') >= 0
      ? [{ limit: limitNumber, offset: offsetNumber }]
      : [searchCriteria, { limit: limitNumber, offset: offsetNumber }]
    spotifyApi[listType](...data).then((res) => {
        resolve(setData(listType, res))
    }).catch(() => {
      window.location.href = '/'
    })
  })
}
