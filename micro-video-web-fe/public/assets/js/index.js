/**
 * 初始化
 */
function init() {
  $('.content').load('contents/profile-center.html', function () {
    $(this).append('profile-center')
  })
}

/**
 * 加载侧边栏
 *
 * @author C¥C
 */
function loadSidebar() {
  $('.sidebar').load('components/sidebar.html', () => {
    // * 导航元素
    const navItems = [
      'profile-center',
      'mine-video',
      'mine-bought',
      'watch-history',
      'mine-collection',
      'message-center'
    ]

    $(`#${navItems[0]}`).addClass('active')

    // * 导航元素添加点击事件
    navItems.map((item) => {
      $(`#${item}`).click(function () {
        const _this = this

        $('.content').load(`contents/${item}.html`, function () {
          switch (item) {
            case navItems[0]:
              contentProfileCenter()
              break
            case navItems[1]:
              contentMineVideo()
              break
            case navItems[2]:
              contentMineBought()
              break
            case navItems[3]:
              contentWatchHistory()
              break
            case navItems[4]:
              contentMineCollection()
              break
            case navItems[5]:
              contentMessageCenter()
              break
            default:
              console.error('Fetch content error!')
          }
        })

        $('.nav-item').each(function () {
          this === _this
            ? $(this).addClass('active')
            : $(this).removeClass('active')
        })
      })
    })
    // 个人中心
    // $('#profile-center').click(() => {
    //   $('.content').load('contents/profile-center.html')
    // })
    // 我的视频
    // $('#mine-video').click(() => {
    //   $('.content').load('contents/mine-video.html')
    // })
    // 已购专栏
    // $('#mine-bought').click(() => {
    //   $('.content').load('contents/mine-bought.html')
    // })
    // 观看历史
    // $('#watch-history').click(() => {
    //   $('.content').load('contents/watch-history.html')
    // })
    // 我的收藏
    // $('#mine-collection').click(() => {
    //   $('.content').load('contents/mine-collection.html')
    // })
    // 消息中心
    // $('#message-center').click(() => {
    //   $('.content').load('contents/message-center.html')
    // })

    $('.exit button').click(() => {
      location.href = 'login.html'
    })
  })
}

const snapVideoTemplate = `
  <div class="col-3">
    <div class="card snap-video">
      <video class="video" src="">
        <span class="time"></span>
      </video>
    </div>
  </div>
`

function contentProfileCenter() {
  $('.container').append('<h4>Profile Center</h4>')
}

function contentMineVideo() {
  let k = 0
  for (let i = 0, k = 0; i < 12; i++) {
    if (i % 4 === 0) {
      k++
      $('.container').append(`<div class="row row${k}"></div>`)
    }
    $(`.row${k}`).append(snapVideoTemplate)
  }
}

function contentMineBought() {
  $('.container').append('<h4>Mine Bought</h4>')
}

function contentWatchHistory() {
  $('.container').append('<h4>Watch History</h4>')
}

function contentMineCollection() {
  $('.container').append('<h4>Mine Collection</h4>')
}

function contentMessageCenter() {
  $('.container').append('<h4>Message Center</h4>')
}

/**
 * 渲染函数
 *
 * @author C¥C
 */
function render() {
  init()
  loadSidebar()
}

render()
