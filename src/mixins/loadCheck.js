export const LoadCheck = {
  data() {
    return {
      startTime: this.$moment(new Date()),
      endTime: this.$moment(new Date()),
      toLoad: 0,
      itemsLoaded: 0
    };
  },

  computed: {
    loadTime() {
      return this.endTime.diff(this.startTime);
    }
  },

  methods: {
    imageLoaded() {
      this.itemsLoaded++;
      if (this.itemsLoaded === this.toLoad) {
        this.endTime = this.$moment(new Date());
      }
    }
  }
};
