(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kechengxinxi/add-or-update"],{"1b6f":function(e,n,t){"use strict";var i=t("506f"),r=t.n(i);r.a},3556:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var c=e[a](u),o=c.value}catch(s){return void t(s)}c.done?n(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function c(e){a(u,i,r,c,o,"next",e)}function o(e){a(u,i,r,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("1f94"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{ruleForm:{kechengbianhao:this.getUUID(),kechengmingcheng:"",keshi:"",feiyong:"",kaishishijian:"",kechengneirong:"",kechengrenwu:"",fengmian:"",clicktime:"",clicknum:""},user:{},ro:{kechengbianhao:!1,kechengmingcheng:!1,keshi:!1,feiyong:!1,kaishishijian:!1,kechengneirong:!1,kechengrenwu:!1,fengmian:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:c},computed:{},onLoad:function(){var n=u(i.default.mark((function n(t){var r,a,u,c;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(a=n.sent,this.user=a.data,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=13;break}return this.ruleForm.id=t.id,n.next=11,this.$api.info("kechengxinxi",this.ruleForm.id);case 11:a=n.sent,this.ruleForm=a.data;case 13:if(!t.cross){n.next=60;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 16:if((n.t1=n.t0()).done){n.next=60;break}if(c=n.t1.value,"kechengbianhao"!=c){n.next=22;break}return this.ruleForm.kechengbianhao=u[c],this.ro.kechengbianhao=!0,n.abrupt("continue",16);case 22:if("kechengmingcheng"!=c){n.next=26;break}return this.ruleForm.kechengmingcheng=u[c],this.ro.kechengmingcheng=!0,n.abrupt("continue",16);case 26:if("keshi"!=c){n.next=30;break}return this.ruleForm.keshi=u[c],this.ro.keshi=!0,n.abrupt("continue",16);case 30:if("feiyong"!=c){n.next=34;break}return this.ruleForm.feiyong=u[c],this.ro.feiyong=!0,n.abrupt("continue",16);case 34:if("kaishishijian"!=c){n.next=38;break}return this.ruleForm.kaishishijian=u[c],this.ro.kaishishijian=!0,n.abrupt("continue",16);case 38:if("kechengneirong"!=c){n.next=42;break}return this.ruleForm.kechengneirong=u[c],this.ro.kechengneirong=!0,n.abrupt("continue",16);case 42:if("kechengrenwu"!=c){n.next=46;break}return this.ruleForm.kechengrenwu=u[c],this.ro.kechengrenwu=!0,n.abrupt("continue",16);case 46:if("fengmian"!=c){n.next=50;break}return this.ruleForm.fengmian=u[c],this.ro.fengmian=!0,n.abrupt("continue",16);case 50:if("clicktime"!=c){n.next=54;break}return this.ruleForm.clicktime=u[c],this.ro.clicktime=!0,n.abrupt("continue",16);case 54:if("clicknum"!=c){n.next=58;break}return this.ruleForm.clicknum=u[c],this.ro.clicknum=!0,n.abrupt("continue",16);case 58:n.next=16;break;case 60:this.styleChange();case 61:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},kaishishijianChange:function(e){this.ruleForm.kaishishijian=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.feiyong||this.$validate.isIntNumer(this.ruleForm.feiyong)){e.next=3;break}return this.$utils.msg("费用应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=6;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("kechengxinxi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("kechengxinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])},"506f":function(e,n,t){},"534f":function(e,n,t){"use strict";var i={"w-picker":function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"1f94"))}},r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},"68c0":function(e,n,t){"use strict";(function(e){t("5ce7"),t("921b");i(t("66fd"));var n=i(t("9494"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},8855:function(e,n,t){"use strict";t.r(n);var i=t("3556"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},9494:function(e,n,t){"use strict";t.r(n);var i=t("534f"),r=t("8855");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("1b6f");var u,c=t("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"450881bd",null,!1,i["a"],u);n["default"]=o.exports}},[["68c0","common/runtime","common/vendor"]]]);