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
    <div v-for="(image, index) in images" :key="index" class="thumbnail">
      <img :src="`${image.name}~${width}.${image.ext}`" :width="width" @load="imageLoaded" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { LoadCheck } from "../mixins/loadCheck";

export default {
  name: "After",

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
    this.getAfterImages();
  },

  methods: {
    ...mapActions(["getAfterImages"])
  }
};
</script>

<style lang="scss"></style>
