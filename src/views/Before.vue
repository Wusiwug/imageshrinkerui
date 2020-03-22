<template>
  <div class="container">
    <div class="form">
      <label>Width:</label>
      <input type="number" v-model="width" />
      <br />
      <br />
      <b>Load Time:</b>
      {{ loadTime }}
    </div>
    <div class="img-container">
      <div v-for="(image, index) in images" :key="index" class="thumbnail">
        <img :src="image" :width="width" @load="imageLoaded" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { LoadCheck } from "../mixins/loadCheck";

export default {
  name: "Before",

  mixins: [LoadCheck],

  data() {
    return {
      width: 200
    };
  },

  computed: {
    ...mapGetters(["images"])
  },

  mounted() {
    this.getBeforeImages().then(() => {
      this.toLoad = this.images.length;
    });
  },

  methods: {
    ...mapActions(["getBeforeImages"])
  }
};
</script>

<style lang="scss"></style>
