<template>
  <div class="home">
    <video-player :config="playerConfig" :rootStyle="rootStyle" @playerInit="onPlayerInit"></video-player>
    <h2 style="margin:12px 0;">api演示</h2>
    <div class="demo-api">
      <van-row type="flex" justify="space-around">
        <van-col span="6">
          <van-button color="#7232dd" @click="switchSrc">切换视频源</van-button>
        </van-col>
        <van-col span="6">
          <van-button color="#7232dd" @click="switchPoster">切换封面</van-button>
        </van-col>
        <van-col span="6">
          <van-button color="#7232dd" @click="reload">重载播放器</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import playerConfig from "@/assets/playerConfig.js";

export default {
  name: "Home",
  components: {
    VideoPlayer
  },
  data() {
    return {
      playerConfig: playerConfig,
      rootStyle: {
        backgroundColor: "rgba(0,0,0,0.87)"
      },
      player: null
    };
  },
  methods: {
    onPlayerInit(val) {
      this.player = val;
    },
    switchSrc(url) {
      this.player.src =
        "http://static.smartisanos.cn/common/video/video-jgpro.mp4";
      this.player.play();
    },
    switchPoster(url) {
      this.player.poster =
        "https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png";
    },
    reload(){
      this.player.reload()
    }
  }
};
</script>
