(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10],{329:function(t,e,o){"use strict";o.r(e);o(71);var n={name:"ItemNews",props:{author:{type:String,required:!1,default:""},title:{type:String,required:!0},image:{type:String,required:!0},isDerectionRow:{type:Boolean,required:!1,default:!0},isShowAuthor:{type:Boolean,required:!1,default:!0},isFashion:{type:Boolean,required:!1,default:!1},maxHeight:{type:String,required:!1,default:""},backGround:{type:String,required:!1,default:""},isTechnolory:{type:Boolean,required:!1,default:!1}},methods:{getClass:function(){return this.isDerectionRow?"flex justify-start items-start gap-x-4 ".concat(this.isTechnolory?"tb:flex tb:flex-col lt:flex-row":""," ").concat(this.backGround):"flex flex-col ".concat(this.backGround)}}},r=o(54),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{class:t.getClass()},[e("a",{class:t.isDerectionRow?"".concat(t.isFashion?"w-[90px] h-[90px] shrink-0":"w-[150px] h-[100px] shrink-0"):"".concat(t.maxHeight," overflow-hidden"),attrs:{href:"#"}},[e("img",{class:"object-cover ".concat(t.isFashion?"w-[90px] h-[90px] shrink-0":"".concat(t.maxHeight," min-h-[100px] min-w-[150px]")," w-full"),attrs:{src:t.image,alt:"image"}})]),t._v(" "),e("div",{class:t.isDerectionRow?"".concat((t.isFashion,"")):"".concat(0==t.isShowAuthor?"lt:pt-4 pt-2":""," ").concat(""!=t.backGround?"p-5":"")},[1==t.isShowAuthor?e("a",{class:t.isDerectionRow?"uppercase text-[11px] leading-5 font-semibold inline-block text-[#999] hover:text-[#222]":"uppercase text-[11px] leading-5 font-semibold block pt-1 text-[#999] hover:text-[#222]",attrs:{href:"#"}},[t._v("\n        "+t._s(t.author)+"\n      ")]):t._e(),t._v(" "),e("a",{class:1==t.isDerectionRow?"".concat(t.isFashion?"":"leading-5 font-bold"," line-clamp-3 hover:text-sky-500"):"leading-5 font-bold hover:text-sky-500 pt-2 ".concat(""!=t.backGround?"text-[18px]":""," "),attrs:{href:"#"}},[t._v("\n        "+t._s(t.title)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,o){"use strict";o.r(e);var n=o(329),r={__name:"index",setup:function(t){return{__sfc:!0,itemNews:n.default}}},l=o(54),component=Object(l.a)(r,(function(){var t=this,e=t._self._c,o=t._self._setupProxy;return e("div",[t._t("default"),t._v(" "),e("div",{staticClass:"grid mmb:grid-cols-4 mb:grid-cols-1 gap-6 mt-7"},[e(o.itemNews,{staticClass:"pb-5",attrs:{author:"TRAVEL",title:"World’s Best 25 Airlines for 2023 Revealed by Airline Ratings",image:"https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431-600x400.jpg","is-derection-row":!1,"back-ground":"bg-gray-50 h-full"}}),t._v(" "),e(o.itemNews,{staticClass:"pb-5",attrs:{author:"TRAVEL",title:"The Italian beaches putting a daily cap on visitors this summer",image:"https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/beautiful-ocean_XLSPFYQGAK-600x400.jpg","is-derection-row":!1,"back-ground":"bg-gray-50 h-full"}}),t._v(" "),e(o.itemNews,{staticClass:"pb-5",attrs:{author:"TRAVEL",title:"Venice authorities discover why canal turned fluorescent green",image:"https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/water-canal_HZ0FDEESSC-600x400.jpg","is-derection-row":!1,"back-ground":"bg-gray-50 h-full"}}),t._v(" "),e(o.itemNews,{staticClass:"pb-5",attrs:{author:"TRAVEL",title:"Manhattanhenge: Where to see New York City’s special sunset show",image:"https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/sunrise-sunset_XSTO5645BM-600x400.jpg","is-derection-row":!1,"back-ground":"bg-gray-50 h-full"}})],1)],2)}),[],!1,null,null,null);e.default=component.exports}}]);