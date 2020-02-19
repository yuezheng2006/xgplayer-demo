import Player from 'xgplayer'
import PlayNextIcon from '../assets/playNext.svg'

let s_playNext = function () {
  let player = this
  let util = Player.util
  let nextBtn = player.config.playNext
  if (!nextBtn || !nextBtn.urlList) { return }
  let btn = util.createDom('xg-playnext', `<xg-icon class="xgplayer-icon">${PlayNextIcon}</xg-icon>`, {}, 'xgplayer-playnext')
  let tipsText = player.lang.PLAYNEXT_TIPS
  let tips = util.createDom('xg-tips', `<span class="xgplayer-tip-playnext">${tipsText}</span>`, {}, 'xgplayer-tips')
  btn.appendChild(tips)
  player.once('ready', () => {
    player.controls.appendChild(btn)
  });

  ['click', 'touchend'].forEach(item => {
    btn.addEventListener(item, e => {
      e.preventDefault()
      e.stopPropagation()
      player.emit('playNextBtnClick')
    })
  })
}

Player.use('s_playNext', s_playNext)
