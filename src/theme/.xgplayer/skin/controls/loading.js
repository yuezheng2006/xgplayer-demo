import Player from 'xgplayer'
import Loading from '../assets/loading.svg'

let s_loading = function () {
  let player = this
  let root = player.root
  let util = Player.util
  let container = util.createDom('xg-loading', `${Loading}`, {}, 'xgplayer-loading')
  player.once('ready', () => {
    root.appendChild(container)
  })
}

Player.use('s_loading', s_loading)
