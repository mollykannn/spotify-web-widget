<script>
import { useStore } from '@/store/store'
export default {
  props: {
    datas: Object,
  },
  emit: ['Paglication'],
  setup() {
    const store = useStore()
    const updateSpotifyID = (uri) => {
      store.updateSpotifyID(uri)
    }
    return {
      updateSpotifyID,
    }
  },
}
</script>

<template>
  <div class="container-album mb-4" v-if="datas">
    <div class="list-title-column mb-2">
      <h3 class="album-title">
        {{ datas.title }}<span class="count ml-1">({{ datas.first }} - {{ datas.last }} of {{ datas.total }})</span>
      </h3>
      <div class="previous-next-column">
        <span
          @click.prevent="$emit('Paglication', [datas.listType, datas.limit, datas.offset - datas.limit])"
          v-show="datas.previous"
          class="previous"
          >&laquo; Previous</span
        >
        <span @click.prevent="$emit('Paglication', [datas.listType, datas.limit, datas.offset + datas.limit])" v-show="datas.next" class="next"
          >Next &raquo;</span
        >
      </div>
    </div>
    <div v-for="data in datas.items" :key="data.value" class="album" @click.prevent="updateSpotifyID(data.uri)">
      <img :src="data.images[0].url" />
      <div class="album-text">
        <div class="name">{{ data.name }}</div>
        <div class="description">{{ data.artists[0].name }}</div>
      </div>
    </div>
    <hr />
  </div>
</template>
