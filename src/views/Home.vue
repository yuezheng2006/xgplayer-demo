<template>
  <div class="home">
    <video-player :config="playerConfig" :rootStyle="rootStyle" @player="player = $event"/></video-player>

  </div>
</template>

<script>
// @ is an alias to /src
import VideoPlayer from '@/components/VideoPlayer.vue'
import playerConfig from '@/assets/playerConfig.js'

export default {
  name: 'Home',
  components: {
    VideoPlayer
  },
  data(){
    return {
      playerConfig: playerConfig,
      rootStyle: {
        backgroundColor: 'rgba(0,0,0,0.87)'
      },
      player: null
    }
  }
}
</script>
