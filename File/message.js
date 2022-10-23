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
                        text: "然后呢？",
                        value: "sure"
                    }, {
                        text: "少废话！",
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
            content: "QwQ"
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
            content: "114514岁，是学生，毕业于常盘台中学。"
        }).then(function () {
            botui.message.add(
                {
                    delay: 1400,
                    content: "从某种角度上来看，也算是程序员吧，比较偶尔也写写代码"
                }
            ).then(function () {
                botui.message.add(
                    {
                        delay: 2400,
                        content: "这几年写过C C++  Python HTML JavaScript CSS 尽管出了C++其它只是碰一碰……"
                    }).then(function () {
                        botui.message.add(
                            {
                                delay: 2400,
                                content: "兴趣爱好广泛，喜欢玩游戏，看番；喜欢的游戏是Among us和Minecraft，最喜欢的番是JOJOの奇妙冒险"
                            }
                        ).then(function () {
                            botui.message.add(
                                {
                                    delay: 1400,
                                    content: '（怎么可能是个二刺螈）'
                                }
                            ).then(
                                function () {
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
                                                        text: "为什么叫 我鬼知道吖~ ？",
                                                        value: "dog?"
                                                    }
                                                ]
                                            }
                                        ).then(function (a) {
                                            nextdog();
                                        })

                                    })
                                }

                            )
                        })
                    })
            })
        })

    };
    var nextdog = function () {

        botui.message.add(
            {
                delay: 2400,
                content: '很久很久以前，在我玩4399的时候，就想过要起什么名字，但是后来实在是太懒了，于是就随便起了个 我鬼知道吖~'
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
                            content: "没有了……<br>想知道更多就自己去找吧  ╮(╯▽╰)╭  "
                        }
                    )
                }
            )
        })
    };
}

botuiinit();

