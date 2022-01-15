import { computed, inject, provide, reactive } from "vue";

export const initStore = () => {
  // State
  const state = reactive({
    spotifyID: '',
  });

  // Getters
  const getSpotifyID = computed(() => state.spotifyID);

  // Actions
  const updateSpotifyID = (name) => {
    state.spotifyID = name;
  };

  provide("getSpotifyID", getSpotifyID);
  provide("updateSpotifyID", updateSpotifyID);

};

export const useStore = () => ({
  getSpotifyID: inject("getSpotifyID"),
  updateSpotifyID: inject("updateSpotifyID"),
});