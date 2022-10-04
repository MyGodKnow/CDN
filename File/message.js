/* botui 0.3.9
 * A JS library to build the UI for your bot
 * https://botui.org
 * Copyright 2019, Moin Uddin
 * Released under the MIT license.*/
!function(t,e){"use strict";"function"==typeof define&&define.amd?define([],function(){return t.BotUI=e(t)}):t.BotUI=e(t)}("undefined"!=typeof window?window:this,function(t,e){"use strict";return function(e,n){function o(t,e,n,o){return"<a class='botui-message-content-link' target='"+(o?"blank":"")+"' href='"+n+"'>"+e+"</a>"}function i(t){return t.replace(b.image,"<img class='botui-message-content-image' src='$2' alt='$1' />").replace(b.icon,"<i class='botui-icon botui-message-content-icon fa fa-$1'></i>").replace(b.link,o)}function a(t,e){var n=document.createElement("script");n.type="text/javascript",n.src=t,e&&(n.onload=e),document.body.appendChild(n)}function s(t){x.action.addMessage&&m.message.human({delay:100,content:t}),x.action.show=!x.action.autoHide}function c(t){if(!t.loading&&!t.content)throw Error('BotUI: "content" is required in a non-loading message object.');t.type=t.type||"text",t.visible=!t.delay&&!t.loading;var e=x.messages.push(t)-1;return new Promise(function(n,o){setTimeout(function(){t.delay&&(t.visible=!0,t.loading&&(t.loading=!1)),n(e)},t.delay||0)})}function u(t){return"string"==typeof t&&(t={content:t}),t||{}}function r(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function l(t){if(!t.action&&!t.actionButton&&!t.actionText)throw Error('BotUI: "action" property is required.')}function h(t){return l(t),r({type:"text",cssClass:"",autoHide:!0,addMessage:!0},t),x.action.type=t.type,x.action.cssClass=t.cssClass,x.action.autoHide=t.autoHide,x.action.addMessage=t.addMessage,new Promise(function(e,n){v=e,setTimeout(function(){x.action.show=!0},t.delay||0)})}if(n=n||{},!e)throw Error("BotUI: Container id is required as first argument.");if(!document.getElementById(e))throw Error("BotUI: Element with id #"+e+" does not exist.");if(!t.Vue&&!n.vue)throw Error("BotUI: Vue is required but not found.");var f,d,v,p={debug:!1,fontawesome:!0,searchselect:!0},m={},b={icon:/!\(([^\)]+)\)/gim,image:/!\[(.*?)\]\((.*?)\)/gim,link:/\[([^\[]+)\]\(([^\)]+)\)(\^?)/gim};t.Vue=t.Vue||n.vue;for(var g in p)n.hasOwnProperty(g)&&(p[g]=n[g]);t.Promise||"undefined"!=typeof Promise||n.promise||a("https://cdn.jsdelivr.net/es6-promise/4.1.0/es6-promise.min.js");var y={template:"<div class=\"botui botui-container\" v-botui-container><div class=\"botui-messages-container\"><div v-for=\"msg in messages\" class=\"botui-message\" :class=\"msg.cssClass\" v-botui-scroll><transition name=\"slide-fade\"><div v-if=\"msg.visible\"><div v-if=\"msg.photo && !msg.loading\" :class=\"[\'profil\', \'profile\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.photo\" :class=\"[{human: msg.human, \'agent\': !msg.human}]\"></div><div :class=\"[{human: msg.human, \'botui-message-content\': true}, msg.type]\"><span v-if=\"msg.type == \'text\'\" v-text=\"msg.content\" v-botui-markdown></span><span v-if=\"msg.type == \'html\'\" v-html=\"msg.content\"></span> <iframe v-if=\"msg.type == \'embed\'\" :src=\"msg.content\" frameborder=\"0\" allowfullscreen></iframe></div></div></transition><div v-if=\"msg.photo && msg.loading && !msg.human\" :class=\"[\'profil\', \'profile\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.photo\" :class=\"[{human: msg.human, \'agent\': !msg.human}]\"></div><div v-if=\"msg.loading\" class=\"botui-message-content loading\"><i class=\"dot\"></i><i class=\"dot\"></i><i class=\"dot\"></i></div></div></div><div class=\"botui-actions-container\"><transition name=\"slide-fade\"><div v-if=\"action.show\" v-botui-scroll><form v-if=\"action.type == \'text\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <input type=\"text\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\" action.text.value\" :class=\"action.text.cssClass\" required v-focus/> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}\"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button></form><form v-if=\"action.type == \'select\'\" class=\"botui-actions-select\" @submit.prevent=\"handle_action_select()\" :class=\"action.cssClass\"><i v-if=\"action.select.icon\" class=\"botui-icon botui-action-select-icon fa\" :class=\"\'fa-\' + action.select.icon\"></i><v-select v-if=\"action.select.searchselect && !action.select.multipleselect\" v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select><v-select v-else-if=\"action.select.searchselect && action.select.multipleselect\" multiple v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select> <select v-else v-model=\"action.select.value\" class=\"botui-actions-text-select\" :placeholder=\"action.select.placeholder\" :size=\"action.select.size\" :class=\"action.select.cssClass\" required v-focus><option v-for=\"option in action.select.options\" :class=\"action.select.optionClass\" v-bind:value=\"option.value\" :disabled=\"(option.value == \'\')?true:false\" :selected=\"(action.select.value == option.value)?\'selected\':\'\'\"> {{ option.text }}</option></select> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.select.button, \'botui-actions-select-submit\': !action.select.button}\"><i v-if=\"action.select.button && action.select.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.select.button.icon\"></i> <span>{{(action.select.button && action.select.button.label) || \'Ok\'}}</span></button></form><div v-if=\"action.type == \'button\'\" class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-botui-scroll v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\"><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div><form v-if=\"action.type == \'buttontext\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <input type=\"text\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\"action.text.value\" :class=\"action.text.cssClass\" required v-focus/> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}\"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button><div class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\" autofocus><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div></form></div></transition></div></div>",data:function(){return{action:{text:{size:30,placeholder:"Write here .."},button:{},show:!1,type:"text",autoHide:!0,addMessage:!0},messages:[]}},computed:{isMobile:function(){return t.innerWidth&&t.innerWidth<=768}},methods:{handle_action_button:function(t){for(var e=0;e<this.action.button.buttons.length;e++)if(this.action.button.buttons[e].value==t.value&&"function"==typeof this.action.button.buttons[e].event){if(this.action.button.buttons[e].event(t),this.action.button.buttons[e].actionStop)return!1;break}s(t.text);var n={type:"button",text:t.text,value:t.value};for(var o in t)t.hasOwnProperty(o)&&"type"!==o&&"text"!==o&&"value"!==o&&(n[o]=t[o]);v(n)},handle_action_text:function(){this.action.text.value&&(s(this.action.text.value),v({type:"text",value:this.action.text.value}),this.action.text.value="")},handle_action_select:function(){if(this.action.select.searchselect&&!this.action.select.multipleselect){if(!this.action.select.value.value)return;s(this.action.select.value[this.action.select.label]),v({type:"text",value:this.action.select.value.value,text:this.action.select.value.text,obj:this.action.select.value})}if(this.action.select.searchselect&&this.action.select.multipleselect){if(!this.action.select.value)return;for(var t=new Array,e=new Array,n=0;n<this.action.select.value.length;n++)t.push(this.action.select.value[n].value),e.push(this.action.select.value[n][this.action.select.label]);s(e.join(", ")),v({type:"text",value:t.join(", "),text:e.join(", "),obj:this.action.select.value})}else{if(!this.action.select.value)return;for(var n=0;n<this.action.select.options.length;n++)this.action.select.options[n].value==this.action.select.value&&(s(this.action.select.options[n].text),v({type:"text",value:this.action.select.value,text:this.action.select.options[n].text}))}}}};t.Vue.directive("botui-markdown",function(t,e){"false"!=e.value&&(t.innerHTML=i(t.textContent))}),t.Vue.directive("botui-scroll",{inserted:function(t){d.scrollTop=d.scrollHeight,t.scrollIntoView(!0)}}),t.Vue.directive("focus",{inserted:function(t){t.focus()}}),t.Vue.directive("botui-container",{inserted:function(t){d=t}}),f=new t.Vue({components:{"bot-ui":y}}).$mount("#"+e);var x=f.$children[0];return m.message={add:function(t){return c(u(t))},bot:function(t){return t=u(t),c(t)},human:function(t){return t=u(t),t.human=!0,c(t)},get:function(t){return Promise.resolve(x.messages[t])},remove:function(t){return x.messages.splice(t,1),Promise.resolve()},update:function(t,e){var n=x.messages[t];return n.content=e.content,n.visible=!e.loading,n.loading=!!e.loading,Promise.resolve(e.content)},removeAll:function(){return x.messages.splice(0,x.messages.length),Promise.resolve()}},m.action={show:h,hide:function(){return x.action.show=!1,Promise.resolve()},text:function(t){return l(t),x.action.text=t.action,h(t)},button:function(t){return l(t),t.type="button",x.action.button.buttons=t.action,h(t)},select:function(t){if(l(t),t.type="select",t.action.label=t.action.label||"text",t.action.value=t.action.value||"",t.action.searchselect=void 0!==t.action.searchselect?t.action.searchselect:p.searchselect,t.action.multipleselect=t.action.multipleselect||!1,t.action.searchselect&&"string"==typeof t.action.value)if(t.action.multipleselect){var e=t.action.value.split(",");t.action.value=new Array;for(var n=0;n<t.action.options.length;n++)for(var o=0;o<e.length;o++)t.action.options[n].value==e[o]&&t.action.value.push(t.action.options[n])}else for(var n=0;n<t.action.options.length;n++)t.action.options[n].value==t.action.value&&(t.action.value=t.action.options[n]);return t.action.searchselect||t.action.options.unshift({value:"",text:t.action.placeholder}),x.action.button=t.action.button,x.action.select=t.action,h(t)},buttontext:function(t){return l(t),t.type="buttontext",x.action.button.buttons=t.actionButton,x.action.text=t.actionText,h(t)}},p.fontawesome&&a("https://use.fontawesome.com/ea731dcb6f.js"),p.searchselect&&a("https://unpkg.com/vue-select@2.4.0/dist/vue-select.js",function(){Vue.component("v-select",VueSelect.VueSelect)}),p.debug&&(m._botApp=f),m}});
/*正片*/
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
            delay: 1400,
            content: "这是小时候闲的没事起的，当时4399就叫这个名字，后来又把QQ名也改成我鬼知道了，就一直把我鬼知道这个名字用到现在"
        }).then(function(){
            botui.message.add({
                delay: 1400,
                content: "之所以后来改名为我鬼知道吖~，是因为同学做了一个和我一样的高仿号，就顺手改了一下（怎么感觉有点沙雕），就一直沿用至今"
            }).then(function () {
                botui.action.button({
                    dealy: 1100,
                    action: [{
                        text: "然后呢？",
                        value: "then"
                    }]
                }).then(function (a) {
                    sowhat()
                })
            })
        })
    };
    
    var sowhat = function () {
        botui.message.add({
            delay: 800,
            content: "没有了哦~"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "那么，仔细看看我的博客吧！"
            })
        })
    }
}