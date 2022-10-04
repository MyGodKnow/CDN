function botuiinit() {
        var botui = new BotUI("my-botui-app");
    botui.message.add({
        delay: 800,
        content: "Hi, there!"
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
                    delay: 1400,
                    action: [{
                        text: "然后呢？",
                        value: "sure"
                    }, {
                        text: "Silence Wench",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end();
                })
            })
        })
    });

    var end = function () {
        botui.message.add({
            delay: 500,
            content: "QwQ"
        })
    };

    var sure = function () {
        botui.message.add({
            delay: 800,
            content: " ヾ(≧∇≦*)ゝ "
        }).then(function(){
            second();
        })
    };

    var second = function() {
        botui.message.add({
            delay: 800,
            content: "11.4514岁，是学生。"
        }).then(function () {
            botui.message.add({
                type: "html",
                delay: 1700,
                content: "喜欢电脑，懂一点HTML、CSS、JS，主攻C++，曾经还尝试过Python~</br>梦想是成为<del>秧歌star</del>超高校级の程序员"
            }).then(function () {
                botui.message.add({
                    delay: 1100,
                    content: "兴趣爱好广泛，喜欢二次元、英语、游戏。经常玩我的世界和Among Us。"
                }).then(function () {
                    botui.action.button({
                        delay: 1100,
                        action: [{
                            text: "为什么会叫我鬼知道这么奇怪的名字呢？",
                            value: "why"
                        }]
                    }).then(function (a) {
                        whycallname();
                    })
                })
            })
        })
    };

    var whycallname = function () {
        botui.message.add({
            delay: 1100,
            content: "这是小时候闲的没事起的，当时4399就叫这个名字，后来又把QQ名也改成我鬼知道了，就一直把我鬼知道这个名字用到现在"
        }).then(function(){
            botui.message.add({
                delay: 1100,
                content: "之所以后来改名为我鬼知道吖~，是因为同学做了一个和我一样的高仿号，就顺手改了一下（怎么感觉有点沙雕），也一直沿用至今"
            })
        })
    };
}