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
      <img :src="image" :width="width" @load="imageLoaded" />
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

<style lang="scss">
.container {
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 0 25%;
  display: flex;

  .form {
    width: 100%;
    margin-bottom: 2rem;

    input {
      padding: 0.5rem;
      margin-left: 0.5rem;
    }
  }

  .thumbnail {
    flex: 1 1 auto;
  }
}
</style>
