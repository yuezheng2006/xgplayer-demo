<template>
  <div :id="config.id" :style="rootStyle"></div>
</template>

<script>
import Player from "xgplayer";

export default {
  name: "VideoPlayer",
  data() {
    return {
      player: null
    };
  },
  props: {
    config: {
      type: Object,
      default() {
        return { id: "mse", url: "" };
      }
    },
    rootStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    initPlayer() {
      if (this.config.url) {
        this.player = new Player(this.config);
        this.$emit("player", this.player);
      }
    }
  },
  mounted() {
    this.initPlayer();
  },
  beforeUpdate() {
    this.initPlayer();
  },
  beforeDestroy() {
    this.player &&
      typeof this.player.destroy === "function" &&
      this.player.destroy();
  }
};
</script>
