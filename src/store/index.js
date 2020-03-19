import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const apiUrl = "https://image-streamer.herokuapp.com";//"http://localhost:4000";

const axiosConfig = {
  baseURL: apiUrl,
  timeout: 30000
};

const $axios = axios.create(axiosConfig);

Vue.use(Vuex);

const config = {
  headers: { "Access-Control-Allow-Origin": "*" }
};

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    SET_IMAGES(state, payload) {
      state.images = payload;
    }
  },
  actions: {
    getBeforeImages: ({ commit }) => {
      $axios.get("/before", config).then(resp => {
        const images = [];
        resp.data.map(img => {
          images.push(`${apiUrl}/images/${img}`);
        });

        commit("SET_IMAGES", images);
      });
    },

    getAfterImages: ({ commit }) => {
      $axios.get("/before", config).then(resp => {
        const images = [];
        resp.data.map(img => {
          const fileLst = img.split(".");
          let imgObj = {
            name: `${apiUrl}/shrinker/${fileLst[0]}`,
            ext: fileLst[1]
          };

          images.push(imgObj);
        });

        commit("SET_IMAGES", images);
      });
    }
  },
  getters: {
    images: ({ images }) => images
  },
  modules: {}
});
