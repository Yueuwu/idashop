(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{250:function(t,e,o){var content=o(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(132).default)("5efd5564",content,!0,{sourceMap:!1})},252:function(t,e,o){var content=o(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(132).default)("06ae2c4d",content,!0,{sourceMap:!1})},253:function(t,e,o){"use strict";o(250)},254:function(t,e,o){var r=o(131)(!1);r.push([t.i,'.wrapper[data-v-44192e09]{width:332px;height:423px;background:#fffefb;box-shadow:0 20px 30px rgba(0,0,0,.04),0 6px 10px rgba(0,0,0,.02);border-radius:4px;margin-left:16px;margin-bottom:16px;cursor:pointer}.imgWrap[data-v-44192e09]{width:100%;height:200px;-o-object-fit:cover;object-fit:cover;text-align:center;background-color:#000}.img[data-v-44192e09],.imgWrap[data-v-44192e09]{border-radius:4px 4px 0 0}.img[data-v-44192e09]{max-width:100%;max-height:100%}.body[data-v-44192e09]{margin-top:15px;background:#fffefb;padding:0 15px}.name[data-v-44192e09]{font-weight:600;font-size:20px;line-height:25px;overflow:hidden;height:25px}.description[data-v-44192e09],.name[data-v-44192e09]{font-family:"Source Sans Pro";font-style:normal;background:#fffefb;color:#3f3f3f;word-wrap:break-word}.description[data-v-44192e09]{margin-top:15px;font-weight:400;font-size:16px;line-height:20px;height:80px;overflow-y:hidden}.price[data-v-44192e09]{margin-top:15px;font-family:"Source Sans Pro";font-style:normal;font-weight:600;font-size:24px;line-height:30px;background:#fffefb;color:#3f3f3f;word-wrap:break-word}.wrapper .blockChild[data-v-44192e09]{display:none;width:32px;height:32px;background:#ff8484;box-shadow:0 2px 4px rgba(0,0,0,.1);border-radius:10px}.wrapper:hover .blockChild[data-v-44192e09]{position:absolute;display:flex;justify-content:center;align-items:center;z-index:2;margin-left:310px;margin-top:-10px}.removeIcon[data-v-44192e09]{width:15px;height:15px;background-color:#ff8484;color:#fff}',""]),t.exports=r},256:function(t,e,o){"use strict";o.r(e);o(42);var r={name:"postItem"},n=Object.assign(r,{props:{post:{type:Object}},setup:function(t){return{__sfc:!0,props:t}}}),c=(o(253),o(43)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"blockChild",on:{click:function(e){return t.$emit("remove",t.post)}}},[e("img",{staticClass:"removeIcon",attrs:{src:"https://cdn.icon-icons.com/icons2/1893/PNG/512/dustbin_120823.png",alt:""}})]),t._v(" "),e("div",{staticClass:"imgWrap"},[e("img",{staticClass:"img",attrs:{src:t.post.img,alt:""}})]),t._v(" "),e("div",{staticClass:"body"},[e("div",{staticClass:"name"},[t._v(t._s(t.post.name))]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.post.body))]),t._v(" "),e("div",{staticClass:"price"},[t._v(t._s(t.post.price)+" руб.")])])])])}),[],!1,null,"44192e09",null);e.default=component.exports},259:function(t,e,o){"use strict";o(252)},260:function(t,e,o){var r=o(131)(!1);r.push([t.i,".postsWrapper[data-v-2510178c]{display:flex;flex-direction:row;flex-wrap:wrap;width:1100px}.list-complete-item[data-v-2510178c]{transition:all 1s;display:inline-block;margin-right:10px}.list-complete-enter[data-v-2510178c],.list-complete-leave-to[data-v-2510178c]{opacity:0;transform:translateY(45px)}.list-complete-leave-active[data-v-2510178c]{position:absolute}",""]),t.exports=r},265:function(t,e,o){"use strict";o.r(e);var r={name:"postsComponent"},n=Object.assign(r,{props:{posts:{type:Array}},setup:function(t){return{__sfc:!0,props:t}}}),c=(o(259),o(43)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"postsWrapper"},[e("transition-group",{attrs:{name:"list-complete"}},t._l(t.posts,(function(o){return e("post-item",{key:o.id,staticClass:"list-complete-item",attrs:{post:o},on:{remove:function(e){return t.$emit("remove",o)}}})})),1)],1)}),[],!1,null,"2510178c",null);e.default=component.exports;installComponents(component,{PostItem:o(256).default})}}]);