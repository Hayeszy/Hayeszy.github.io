(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45099778"],{"24a8":function(e,o,n){"use strict";n("383d")},"383d":function(e,o,n){},"95dd":function(e,o,n){},"9ed6":function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginFormRules,"auto-complete":"on","label-position":"left"}},[t("img",{staticClass:"login-logo",attrs:{src:n("d68b")}}),t("el-form-item",{attrs:{prop:"loginName"}},[t("span",{staticClass:"iconfont icon-zhanghao"}),t("el-input",{ref:"loginName",attrs:{placeholder:"请输入账号",name:"loginName",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.loginName,callback:function(o){e.$set(e.loginForm,"loginName",o)},expression:"loginForm.loginName"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"iconfont icon-mima"}),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"请输入密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleLogin(o)}},model:{value:e.loginForm.password,callback:function(o){e.$set(e.loginForm,"password",o)},expression:"loginForm.password"}}),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("span",{class:"password"===e.passwordType?"iconfont icon-yanjing1":"iconfont icon-yanjing"})])],1),t("el-form-item",{attrs:{prop:"code"}},[t("span",{staticClass:"iconfont icon-yanzheng"}),t("el-input",{ref:"code",attrs:{placeholder:"请输入验证码",name:"code",type:"text",tabindex:"3","auto-complete":"on"},model:{value:e.loginForm.code,callback:function(o){e.$set(e.loginForm,"code",o)},expression:"loginForm.code"}}),t("span",{on:{click:e.createCode}},[t("img",{staticClass:"code-image",attrs:{src:e.imgUrl}})])],1),t("el-button",{staticClass:"loginBtn",staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"primary",loading:e.loading},on:{click:e.login}},[e._v("登录")])],1)],1)},a=[],s=n("c7eb"),r=n("1da1"),i=(n("61f7"),n("c24f")),c={name:"Login",data:function(){return{loginForm:{loginName:"admin",password:"admin",code:"",loginType:0,clientToken:""},loginFormRules:{loginName:[{required:!0,message:"请输入账号"},{pattern:/^[a-zA-Z]\w{4,15}$/,message:"账号名或密码错误"}],password:[{required:!0,message:"请输入密码"},{pattern:/^[a-zA-Z]\w{4,15}$/,message:"账号名或密码错误"}],code:[{required:!0,message:"请输入验证码"},{pattern:/^[0-9A-Za-z]{4}$/,message:"验证码错误"}]},loading:!1,passwordType:"password",redirect:void 0,imgUrl:""}},mounted:function(){this.createCode()},watch:{},methods:{createCode:function(){var e=this;return Object(r["a"])(Object(s["a"])().mark((function o(){var n,t,a,r,c,l,p;return Object(s["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:for(n="",t=4,a=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],r=0;r<t;r++)c=Math.floor(36*Math.random()),n+=a[c];return e.loginForm.clientToken=n,o.next=7,Object(i["a"])(n);case 7:l=o.sent,p=l.request.responseURL,e.imgUrl=p;case 10:case"end":return o.stop()}}),o)})))()},login:function(){var e=this;return Object(r["a"])(Object(s["a"])().mark((function o(){return Object(s["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e.loading=!0,o.prev=1,o.next=4,e.$refs.loginForm.validate();case 4:return o.next=6,e.$store.dispatch("user/getToken",e.loginForm);case 6:e.$router.push("/");case 7:return o.prev=7,e.loading=!1,o.finish(7);case 10:case"end":return o.stop()}}),o,null,[[1,,7,10]])})))()},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))}}},l=c,p=(n("24a8"),n("e9ea"),n("2877")),d=Object(p["a"])(l,t,a,!1,null,"6885585a",null);o["default"]=d.exports},d68b:function(e,o,n){e.exports=n.p+"static/img/logo.595745bd.595745bd.png"},e9ea:function(e,o,n){"use strict";n("95dd")}}]);