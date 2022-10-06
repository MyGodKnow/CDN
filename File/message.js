
// var botui;

function botuiinit() {
    var botui = new BotUI("my-botui-app");
botui.message.add({
  delay: 800,
  content: "Hi, there👋"
}).then(function () {
  botui.message.add({
    delay: 1100,
    content: "这里是 我鬼知道吖~"
  }).then(function () {
    botui.message.add({
      delay: 1100,
      content: "一个可爱的蓝孩子~"
    }).then(function () {
      botui.action.button({
        delay: 1600,
        action: [{
          text: "然后呢？ 😃",
          value: "sure"
        }, {
          text: "少废话！ 🙄",
          value: "skip"
        }]
      }).then(function (a) {
        "sure" == a.value && sure();
        "skip" == a.value && end()
      })
    })
  })
});

var end = function () {
    botui.message.add({
      delay: 600,
      content: "QWQ"
    })
  };
  var sure = function () {
    botui.message.add({
      delay: 600,
      content: " ヾ(≧∇≦*)ゝ "
    }).then(function () {
      secondpart();
    })
  };
  
  var secondpart = function () {
    botui.message.add({
      delay: 1200,
      content: "11.4514岁，是学生。"
    }).then(function () {
      botui.message.add(
        {
          delay: 1400,
          type : "html",
          content: "喜欢电脑，懂一点HTML、CSS、JS，主攻C++，曾经还尝试过Python~</br>梦想是成为<del>秧歌star</del>超高校级の程序员"
        }
      ).then(function () {
        botui.message.add(
          {
            delay: 2400,
            content: "兴趣爱好广泛，喜欢二次元、英语、游戏。经常玩我的世界和Among Us，最喜欢的番是JOJOの奇妙冒险"
          }).then(function () {
            botui.message.add(
              {
                delay: 1400,
                content: "最喜欢的事是宅在家里，最不喜欢的事是被人拉出去吃饭之类的。"
              }
            ).then(function () {
              botui.message.add(
              {
                delay: 1000,
                content: '……'
              }
              ).then(function () {
                botui.action.button(
                  {
                    delay: 2000,
                    action: [
                      {
                        text: "为什么叫 我鬼知道 呢？",
                        value: "dog?"
                       }
                    ]
                  }
                ).then(function (a) {
                  nextdog();
                })
               })
            })
          })
      })
    })
  
  };
  var nextdog = function () {
  
    botui.message.add(
      {
        delay: 800,
        content: '这是小时候闲的没事起的，当时4399就叫这个名字，后来又把QQ名也改成我鬼知道了，就一直把我鬼知道这个名字用到现在'
      }
    ).then(function () {
  
      botui.action.button(
        {
          delay: 2000,
          action: [
            {
              text: "还有呢？",
              value: "dog"
            }
          ]
        }
      ).then(
        function () {
          botui.message.add(
            {
              delay: 900,
              type: "html",
              content: "没有了……</br>想知道更多就自己去找吧  ╮(╯▽╰)╭ </br> 欢迎来我的博客参观~ "
            }
          )
        }
      )
    })
  };
}

botuiinit();


