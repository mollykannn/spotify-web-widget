import{_ as M,o as q,c as P,a as c,d as G,t as h,g as S,i as A,m as w,F as O,p as R,q as L,l as W,e as E,r as U,j as N,s as B,b as _}from"./index.261bc475.js";import{S as V}from"./spotifyWidget.307e2cc8.js";var x={exports:{}};(function(l){var u=function(){var s="https://api.spotify.com/v1",p=null,m=null,g=function(t,e){return t.abort=e,t},f=function(t,e){var r;if(m!==null){var a=m.defer();t(function(i){a.resolve(i)},function(i){a.reject(i)}),r=a.promise}else window.Promise&&(r=new window.Promise(t));return r?new g(r,e):null},D=function(){var t=Array.prototype.slice.call(arguments),e=t[0],r=t.slice(1);return e=e||{},r.forEach(function(a){for(var i in a)a.hasOwnProperty(i)&&(e[i]=a[i])}),e},v=function(t,e){var r="";for(var a in e)if(e.hasOwnProperty(a)){var i=e[a];r+=encodeURIComponent(a)+"="+encodeURIComponent(i)+"&"}return r.length>0&&(r=r.substring(0,r.length-1),t=t+"?"+r),t},j=function(t,e){var r=new XMLHttpRequest,a=function(i,y){function d(T){i&&i(T),e&&e(null,T)}function F(){y&&y(r),e&&e(r,null)}var b=t.type||"GET";if(r.open(b,v(t.url,t.params)),p&&r.setRequestHeader("Authorization","Bearer "+p),r.onreadystatechange=function(){if(r.readyState===4){var T=null;try{T=r.responseText?JSON.parse(r.responseText):""}catch(I){console.error(I)}r.status>=200&&r.status<300?d(T):F()}},b==="GET")r.send(null);else{var k=null;t.postData&&(t.contentType==="image/jpeg"?(k=t.postData,r.setRequestHeader("Content-Type",t.contentType)):(k=JSON.stringify(t.postData),r.setRequestHeader("Content-Type","application/json"))),r.send(k)}};return e?(a(),null):f(a,function(){r.abort()})},n=function(t,e,r,a){var i={},y=null;typeof e=="object"?(i=e,y=r):typeof e=="function"&&(y=e);var d=t.type||"GET";return d!=="GET"&&t.postData&&!a?t.postData=D(t.postData,i):t.params=D(t.params,i),j(t,y)},o=function(){};return o.prototype={constructor:u},o.prototype.getGeneric=function(t,e){var r={url:t};return n(r,e)},o.prototype.getMe=function(t,e){var r={url:s+"/me"};return n(r,t,e)},o.prototype.getMySavedTracks=function(t,e){var r={url:s+"/me/tracks"};return n(r,t,e)},o.prototype.addToMySavedTracks=function(t,e,r){var a={url:s+"/me/tracks",type:"PUT",postData:t};return n(a,e,r)},o.prototype.removeFromMySavedTracks=function(t,e,r){var a={url:s+"/me/tracks",type:"DELETE",postData:t};return n(a,e,r)},o.prototype.containsMySavedTracks=function(t,e,r){var a={url:s+"/me/tracks/contains",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getMySavedAlbums=function(t,e){var r={url:s+"/me/albums"};return n(r,t,e)},o.prototype.addToMySavedAlbums=function(t,e,r){var a={url:s+"/me/albums",type:"PUT",postData:t};return n(a,e,r)},o.prototype.removeFromMySavedAlbums=function(t,e,r){var a={url:s+"/me/albums",type:"DELETE",postData:t};return n(a,e,r)},o.prototype.containsMySavedAlbums=function(t,e,r){var a={url:s+"/me/albums/contains",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getMyTopArtists=function(t,e){var r={url:s+"/me/top/artists"};return n(r,t,e)},o.prototype.getMyTopTracks=function(t,e){var r={url:s+"/me/top/tracks"};return n(r,t,e)},o.prototype.getMyRecentlyPlayedTracks=function(t,e){var r={url:s+"/me/player/recently-played"};return n(r,t,e)},o.prototype.followUsers=function(t,e){var r={url:s+"/me/following/",type:"PUT",params:{ids:t.join(","),type:"user"}};return n(r,e)},o.prototype.followArtists=function(t,e){var r={url:s+"/me/following/",type:"PUT",params:{ids:t.join(","),type:"artist"}};return n(r,e)},o.prototype.followPlaylist=function(t,e,r){var a={url:s+"/playlists/"+t+"/followers",type:"PUT",postData:{}};return n(a,e,r)},o.prototype.unfollowUsers=function(t,e){var r={url:s+"/me/following/",type:"DELETE",params:{ids:t.join(","),type:"user"}};return n(r,e)},o.prototype.unfollowArtists=function(t,e){var r={url:s+"/me/following/",type:"DELETE",params:{ids:t.join(","),type:"artist"}};return n(r,e)},o.prototype.unfollowPlaylist=function(t,e){var r={url:s+"/playlists/"+t+"/followers",type:"DELETE"};return n(r,e)},o.prototype.isFollowingUsers=function(t,e){var r={url:s+"/me/following/contains",type:"GET",params:{ids:t.join(","),type:"user"}};return n(r,e)},o.prototype.isFollowingArtists=function(t,e){var r={url:s+"/me/following/contains",type:"GET",params:{ids:t.join(","),type:"artist"}};return n(r,e)},o.prototype.areFollowingPlaylist=function(t,e,r){var a={url:s+"/playlists/"+t+"/followers/contains",type:"GET",params:{ids:e.join(",")}};return n(a,r)},o.prototype.getFollowedArtists=function(t,e){var r={url:s+"/me/following",type:"GET",params:{type:"artist"}};return n(r,t,e)},o.prototype.getUser=function(t,e,r){var a={url:s+"/users/"+encodeURIComponent(t)};return n(a,e,r)},o.prototype.getUserPlaylists=function(t,e,r){var a;return typeof t=="string"?a={url:s+"/users/"+encodeURIComponent(t)+"/playlists"}:(a={url:s+"/me/playlists"},r=e,e=t),n(a,e,r)},o.prototype.getPlaylist=function(t,e,r){var a={url:s+"/playlists/"+t};return n(a,e,r)},o.prototype.getPlaylistTracks=function(t,e,r){var a={url:s+"/playlists/"+t+"/tracks"};return n(a,e,r)},o.prototype.getPlaylistCoverImage=function(t,e){var r={url:s+"/playlists/"+t+"/images"};return n(r,e)},o.prototype.createPlaylist=function(t,e,r){var a={url:s+"/users/"+encodeURIComponent(t)+"/playlists",type:"POST",postData:e};return n(a,e,r)},o.prototype.changePlaylistDetails=function(t,e,r){var a={url:s+"/playlists/"+t,type:"PUT",postData:e};return n(a,e,r)},o.prototype.addTracksToPlaylist=function(t,e,r,a){var i={url:s+"/playlists/"+t+"/tracks",type:"POST",postData:{uris:e}};return n(i,r,a,!0)},o.prototype.replaceTracksInPlaylist=function(t,e,r){var a={url:s+"/playlists/"+t+"/tracks",type:"PUT",postData:{uris:e}};return n(a,{},r)},o.prototype.reorderTracksInPlaylist=function(t,e,r,a,i){var y={url:s+"/playlists/"+t+"/tracks",type:"PUT",postData:{range_start:e,insert_before:r}};return n(y,a,i)},o.prototype.removeTracksFromPlaylist=function(t,e,r){var a=e.map(function(y){return typeof y=="string"?{uri:y}:y}),i={url:s+"/playlists/"+t+"/tracks",type:"DELETE",postData:{tracks:a}};return n(i,{},r)},o.prototype.removeTracksFromPlaylistWithSnapshotId=function(t,e,r,a){var i=e.map(function(d){return typeof d=="string"?{uri:d}:d}),y={url:s+"/playlists/"+t+"/tracks",type:"DELETE",postData:{tracks:i,snapshot_id:r}};return n(y,{},a)},o.prototype.removeTracksFromPlaylistInPositions=function(t,e,r,a){var i={url:s+"/playlists/"+t+"/tracks",type:"DELETE",postData:{positions:e,snapshot_id:r}};return n(i,{},a)},o.prototype.uploadCustomPlaylistCoverImage=function(t,e,r){var a={url:s+"/playlists/"+t+"/images",type:"PUT",postData:e.replace(/^data:image\/jpeg;base64,/,""),contentType:"image/jpeg"};return n(a,{},r)},o.prototype.getAlbum=function(t,e,r){var a={url:s+"/albums/"+t};return n(a,e,r)},o.prototype.getAlbumTracks=function(t,e,r){var a={url:s+"/albums/"+t+"/tracks"};return n(a,e,r)},o.prototype.getAlbums=function(t,e,r){var a={url:s+"/albums/",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getTrack=function(t,e,r){var a={};return a.url=s+"/tracks/"+t,n(a,e,r)},o.prototype.getTracks=function(t,e,r){var a={url:s+"/tracks/",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getArtist=function(t,e,r){var a={url:s+"/artists/"+t};return n(a,e,r)},o.prototype.getArtists=function(t,e,r){var a={url:s+"/artists/",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getArtistAlbums=function(t,e,r){var a={url:s+"/artists/"+t+"/albums"};return n(a,e,r)},o.prototype.getArtistTopTracks=function(t,e,r,a){var i={url:s+"/artists/"+t+"/top-tracks",params:{country:e}};return n(i,r,a)},o.prototype.getArtistRelatedArtists=function(t,e,r){var a={url:s+"/artists/"+t+"/related-artists"};return n(a,e,r)},o.prototype.getFeaturedPlaylists=function(t,e){var r={url:s+"/browse/featured-playlists"};return n(r,t,e)},o.prototype.getNewReleases=function(t,e){var r={url:s+"/browse/new-releases"};return n(r,t,e)},o.prototype.getCategories=function(t,e){var r={url:s+"/browse/categories"};return n(r,t,e)},o.prototype.getCategory=function(t,e,r){var a={url:s+"/browse/categories/"+t};return n(a,e,r)},o.prototype.getCategoryPlaylists=function(t,e,r){var a={url:s+"/browse/categories/"+t+"/playlists"};return n(a,e,r)},o.prototype.search=function(t,e,r,a){var i={url:s+"/search/",params:{q:t,type:e.join(",")}};return n(i,r,a)},o.prototype.searchAlbums=function(t,e,r){return this.search(t,["album"],e,r)},o.prototype.searchArtists=function(t,e,r){return this.search(t,["artist"],e,r)},o.prototype.searchTracks=function(t,e,r){return this.search(t,["track"],e,r)},o.prototype.searchPlaylists=function(t,e,r){return this.search(t,["playlist"],e,r)},o.prototype.searchShows=function(t,e,r){return this.search(t,["show"],e,r)},o.prototype.searchEpisodes=function(t,e,r){return this.search(t,["episode"],e,r)},o.prototype.getAudioFeaturesForTrack=function(t,e){var r={};return r.url=s+"/audio-features/"+t,n(r,{},e)},o.prototype.getAudioFeaturesForTracks=function(t,e){var r={url:s+"/audio-features",params:{ids:t}};return n(r,{},e)},o.prototype.getAudioAnalysisForTrack=function(t,e){var r={};return r.url=s+"/audio-analysis/"+t,n(r,{},e)},o.prototype.getRecommendations=function(t,e){var r={url:s+"/recommendations"};return n(r,t,e)},o.prototype.getAvailableGenreSeeds=function(t){var e={url:s+"/recommendations/available-genre-seeds"};return n(e,{},t)},o.prototype.getMyDevices=function(t){var e={url:s+"/me/player/devices"};return n(e,{},t)},o.prototype.getMyCurrentPlaybackState=function(t,e){var r={url:s+"/me/player"};return n(r,t,e)},o.prototype.getMyCurrentPlayingTrack=function(t,e){var r={url:s+"/me/player/currently-playing"};return n(r,t,e)},o.prototype.transferMyPlayback=function(t,e,r){var a=e||{};a.device_ids=t;var i={type:"PUT",url:s+"/me/player",postData:a};return n(i,e,r)},o.prototype.play=function(t,e){t=t||{};var r="device_id"in t?{device_id:t.device_id}:null,a={};["context_uri","uris","offset","position_ms"].forEach(function(d){d in t&&(a[d]=t[d])});var i={type:"PUT",url:s+"/me/player/play",params:r,postData:a},y=typeof t=="function"?t:{};return n(i,y,e)},o.prototype.queue=function(t,e,r){e=e||{};var a="device_id"in e?{uri:t,device_id:e.device_id}:{uri:t},i={type:"POST",url:s+"/me/player/queue",params:a};return n(i,e,r)},o.prototype.pause=function(t,e){t=t||{};var r="device_id"in t?{device_id:t.device_id}:null,a={type:"PUT",url:s+"/me/player/pause",params:r};return n(a,t,e)},o.prototype.skipToNext=function(t,e){t=t||{};var r="device_id"in t?{device_id:t.device_id}:null,a={type:"POST",url:s+"/me/player/next",params:r};return n(a,t,e)},o.prototype.skipToPrevious=function(t,e){t=t||{};var r="device_id"in t?{device_id:t.device_id}:null,a={type:"POST",url:s+"/me/player/previous",params:r};return n(a,t,e)},o.prototype.seek=function(t,e,r){e=e||{};var a={position_ms:t};"device_id"in e&&(a.device_id=e.device_id);var i={type:"PUT",url:s+"/me/player/seek",params:a};return n(i,e,r)},o.prototype.setRepeat=function(t,e,r){e=e||{};var a={state:t};"device_id"in e&&(a.device_id=e.device_id);var i={type:"PUT",url:s+"/me/player/repeat",params:a};return n(i,e,r)},o.prototype.setVolume=function(t,e,r){e=e||{};var a={volume_percent:t};"device_id"in e&&(a.device_id=e.device_id);var i={type:"PUT",url:s+"/me/player/volume",params:a};return n(i,e,r)},o.prototype.setShuffle=function(t,e,r){e=e||{};var a={state:t};"device_id"in e&&(a.device_id=e.device_id);var i={type:"PUT",url:s+"/me/player/shuffle",params:a};return n(i,e,r)},o.prototype.getShow=function(t,e,r){var a={};return a.url=s+"/shows/"+t,n(a,e,r)},o.prototype.getShows=function(t,e,r){var a={url:s+"/shows/",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getMySavedShows=function(t,e){var r={url:s+"/me/shows"};return n(r,t,e)},o.prototype.addToMySavedShows=function(t,e,r){var a={url:s+"/me/shows",type:"PUT",postData:t};return n(a,e,r)},o.prototype.removeFromMySavedShows=function(t,e,r){var a={url:s+"/me/shows",type:"DELETE",postData:t};return n(a,e,r)},o.prototype.containsMySavedShows=function(t,e,r){var a={url:s+"/me/shows/contains",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getShowEpisodes=function(t,e,r){var a={url:s+"/shows/"+t+"/episodes"};return n(a,e,r)},o.prototype.getEpisode=function(t,e,r){var a={};return a.url=s+"/episodes/"+t,n(a,e,r)},o.prototype.getEpisodes=function(t,e,r){var a={url:s+"/episodes/",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getAccessToken=function(){return p},o.prototype.setAccessToken=function(t){p=t},o.prototype.setPromiseImplementation=function(t){var e=!1;try{var r=new t(function(a){a()});typeof r.then=="function"&&typeof r.catch=="function"&&(e=!0)}catch(a){console.error(a)}if(e)m=t;else throw new Error("Unsupported implementation of Promises/A+")},o}();l.exports=u})(x);var C=x.exports;let H=new C;function J(l,u){return u=l.indexOf("search")>=0?u[l.replace("search","").toLowerCase()]:u,{title:`${l.indexOf("get")>=0?"Saved ":""}${l.indexOf("Album")>=0?"Album":l.indexOf("Playlist")>=0?"Playlist":"Track"}`,listType:l,previous:u.previous,next:u.next,offset:u.offset,limit:u.limit,total:u.total,first:u.offset+1,last:u.limit+u.offset>u.total?u.total:u.limit+u.offset,items:u.items.map(s=>(["getMySavedAlbums","searchAlbums"].includes(l)?s=l=="getMySavedAlbums"?s.album:s:["getUserPlaylists","searchPlaylists"].includes(l)?s.artists=[{name:s.owner.display_name}]:["getMySavedTracks","searchTracks"].includes(l)&&(s=l=="getMySavedTracks"?s.track:s,s.images=[{url:s.album.images[0].url}]),s))}}async function K(l,u,s,p=""){try{let m=[{limit:u,offset:s}];l.indexOf("search")>=0&&m.unshift(p);let g=await H[l](...m);return J(l,g)}catch{}}const z={props:{datas:Object},emit:["Paglication"],setup(){const l=W();return{updateSpotifyID:s=>{l.updateSpotifyID(s)}}}},X={key:0,class:"container-album mb-4"},Q={class:"list-title-column mb-2"},Y={class:"album-title"},Z={class:"count ml-1"},$={class:"previous-next-column"},tt=["onClick"],et=["src"],rt={class:"album-text"},at={class:"name"},st={class:"description"},ot=c("hr",null,null,-1);function nt(l,u,s,p,m,g){return s.datas?(q(),P("div",X,[c("div",Q,[c("h3",Y,[G(h(s.datas.title),1),c("span",Z,"("+h(s.datas.first)+" - "+h(s.datas.last)+" of "+h(s.datas.total)+")",1)]),c("div",$,[S(c("span",{onClick:u[0]||(u[0]=w(f=>l.$emit("Paglication",[s.datas.listType,s.datas.limit,s.datas.offset-s.datas.limit]),["prevent"])),class:"previous"},"\xAB Previous",512),[[A,s.datas.previous]]),S(c("span",{onClick:u[1]||(u[1]=w(f=>l.$emit("Paglication",[s.datas.listType,s.datas.limit,s.datas.offset+s.datas.limit]),["prevent"])),class:"next"},"Next \xBB",512),[[A,s.datas.next]])])]),(q(!0),P(O,null,R(s.datas.items,f=>(q(),P("div",{key:f.value,class:"album",onClick:w(D=>p.updateSpotifyID(f.uri),["prevent"])},[c("img",{src:f.images[0].url},null,8,et),c("div",rt,[c("div",at,h(f.name),1),c("div",st,h(f.artists[0].name),1)])],8,tt))),128)),ot])):L("",!0)}var it=M(z,[["render",nt]]);const ut={components:{SpotifyWidget:V,ListColumn:it},setup(){let l=[["getMySavedAlbums",8,0],["getUserPlaylists",4,0],["getMySavedTracks",8,0]],u=[["searchAlbums",8,0],["searchPlaylists",4,0],["searchTracks",8,0]],s=E({data:"",Submit:()=>{p.GetData(...s.data==""?l:u)}}),p=E({album:{},playlist:{},saveTracks:{},GetData:async(...g)=>{let f=g.map(v=>K(...v,s.data));(await Promise.all(f)).forEach(v=>{["getMySavedAlbums","searchAlbums"].includes(v.listType)?p.album=v:["getUserPlaylists","searchPlaylists"].includes(v.listType)?p.playlist=v:["getMySavedTracks","searchTracks"].includes(v.listType)&&(p.saveTracks=v)})}});return new C().setAccessToken(sessionStorage.getItem("access_token")),p.GetData(...l),{search:s,data:p}}},lt={class:"d-flex mb-6"},pt={class:"column-search"},ct=c("div",{class:"title-column"},[c("h1",{class:"title mb-2"},"Spotify Web Widget"),c("h2",{class:"title-description mb-6",id:"title-description"},"Get the Spotify Web Widget.")],-1),yt={id:"search-tool"};function ft(l,u,s,p,m,g){const f=U("ListColumn"),D=U("SpotifyWidget");return q(),P("div",lt,[c("div",pt,[ct,c("div",yt,[S(c("input",{type:"text",class:"input-search mb-6","onUpdate:modelValue":u[0]||(u[0]=v=>p.search.data=v),onKeyup:u[1]||(u[1]=B(v=>p.search.Submit(),["enter"])),placeholder:"Search Music"},null,544),[[N,p.search.data]]),_(f,{datas:p.data.album,onPaglication:p.data.GetData},null,8,["datas","onPaglication"]),_(f,{datas:p.data.playlist,onPaglication:p.data.GetData},null,8,["datas","onPaglication"]),_(f,{datas:p.data.saveTracks,onPaglication:p.data.GetData},null,8,["datas","onPaglication"])])]),_(D,{page:"details-page"})])}var mt=M(ut,[["render",ft]]);export{mt as default};