<template>
  <div :id="playerOption.id" :style="rootStyle"></div>
</template>

<script>
import Player from "xgplayer";

const defaultConfig = {
  id: "vp",
  fluid: true, //自适应视频内容宽高
  fitVideoSize: "auto", //自适应视频内容宽高
  autoplay: false,
  videoInit: true, //初始化显示视频首帧
//   playbackRate: [0.5, 0.75, 1, 1.5, 2],
//   defaultPlaybackRate: 1,
  playsinline: true,
  lang: "zh-cn",
  volume: 0.6
};
export default {
  name: "VideoPlayer",
  data() {
    return {
      player: null,
      playerOption:defaultConfig,
    };
  },
  props: {
    config: {
      type: Object,
      default() {
        return {};
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
        this.playerOption = Object.assign({}, defaultConfig, this.config);
        this.player = new Player(this.playerOption);
        this.$emit("playerInit", this.player);
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
