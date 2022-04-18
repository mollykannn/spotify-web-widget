<script>
import { computed, reactive, watch } from 'vue'
import { useStore } from "@/store/store";

export default {
  props: {
    page: String
  },
  setup() {
    const store = useStore()
    let setting = reactive({
      size: 'large',
      responsive: false,
      width: 300,
      maxWidth: 0,
      height: 380,
      url: 'spotify:album:6uoOO45XoUdGYJ3nRddfBQ',
      inputURL: computed({
        get: () => setting.size,
        set: (value) => {
          setting.size = value
          setting.height = value == 'small' ? 80 : 380
        },
      }),
      inputSize: computed({
        get: () => setting.size,
        set: (value) => {
          setting.size = value
          setting.height = value == 'small' ? 80 : 380
        },
      }),
      inputResponsive: computed({
        get: () => setting.responsive,
        set: (value) => {
          setting.responsive = value
          setting.width = value ? 0 : 300
          setting.maxWidth = value ? 350 : 0
        },
      }),
      iframeWidth: computed(() => setting.width == 0 ? '100%' : setting.width),
      iframeStyle: computed(() => setting.maxWidth == 0 ? {} : { 'max-width': `${setting.maxWidth}px` }),
    })
    watch(store.getSpotifyID, (id) => {
      setting.url = id
    })

    let copy = reactive({
      code: computed(() => `<iframe src="https://open.spotify.com/embed?uri=${setting.url}" width="${setting.iframeWidth}" height="${setting.height}" frameborder="0" allowtransparency="true" allow="encrypted-media" ${setting.maxWidth == 0 ? '' : `style="max-width: ${setting.maxWidth}px"` }/></iframe>`),
      CopyText: () => {
          if (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
            let textarea = document.createElement('textarea');
            textarea.style.position = 'fixed';
            textarea.value = copy.code;
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
          } else {
            navigator.clipboard.writeText(copy.code)
          }
      }
    })

    return {
      copy,
      setting
    }
  }
}
</script>

<template>
  <div :class="['column-widget', page]">
    <div class="widget">
      <iframe
        :src="`https://open.spotify.com/embed?uri=${setting.url}`"
        :width="setting.iframeWidth"
        :height="setting.height"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        :style="setting.iframeStyle"
      />
    </div>
    <div class="setting-code-column">
      <div class="column setting">
        <div class="setting-column">
          <label>Size:</label>
          <input type="radio" value="small" v-model="setting.inputSize" @click="set_size" />
          <label for="small">Small</label>
          <input type="radio" value="large" v-model="setting.inputSize" @click="set_size" />
          <label for="large">Large</label>
        </div>
        <div class="setting-column">
          <label>Responsive:</label>
          <input type="checkbox" v-model="setting.inputResponsive" />
        </div>
        <div class="setting-column" v-show="!setting.responsive">
          <label>Width:</label>
          <input v-model="setting.width" type="number" />
        </div>
        <div class="setting-column" v-show="setting.responsive">
          <label>Max-Width:</label>
          <input v-model="setting.maxWidth" type="number" />
        </div>
        <div class="setting-column" v-show="setting.size == 'large'">
          <label>Height:</label>
          <input v-model="setting.height" type="number" />
        </div>
        <div class="setting-column">
          <label>Spotify ID:</label>
          <input type="text" v-model="setting.url" />
        </div>
      </div>
      <div class="column code">
        <code class="code-column">
          {{ copy.code }}
          <button class="small primary copy tip" data-label="Success" @click="copy.CopyText()">Copy</button>
        </code>
      </div>
    </div>
  </div>
</template>
