webpackJsonp([1],[,,,,,,,,,,,function(t,s,a){"use strict";var i=a(4),e=a(46),n=a(42),c=a.n(n),o=a(41),r=a.n(o);i.a.use(e.a),s.a=new e.a({routes:[{path:"/",name:"Home",component:c.a},{path:"/faq",name:"Faq",component:r.a}]})},function(t,s,a){function i(t){a(36)}var e=a(2)(a(31),a(44),i,null,null);t.exports=e.exports},,,,,,,,,,,,,,,,,,,function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app",data:function(){return{isActive:!1}},methods:{toggleNav:function(){this.isActive=!this.isActive}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(13),e=a.n(i);s.default={name:"faq",data:function(){return{faqs:[],errors:[]}},created:function(){var t=this;e.a.get("https://jsonplaceholder.typicode.com/posts").then(function(s){t.faqs=s.data.slice(0,10)}).catch(function(s){t.errors.push(s)})}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"home",data:function(){return{heading:"Soaring to new heights",subheading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(4),e=a(12),n=a.n(e),c=a(11);i.a.config.productionTip=!1,new i.a({el:"#app",router:c.a,template:"<App/>",components:{App:n.a}})},function(t,s){},function(t,s){},function(t,s){},,,,function(t,s,a){function i(t){a(37)}var e=a(2)(a(32),a(45),i,"data-v-2d62e482",null);t.exports=e.exports},function(t,s,a){function i(t){a(35)}var e=a(2)(a(33),a(43),i,"data-v-1e2091f4",null);t.exports=e.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("section",{staticClass:"hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v(t._s(t.heading))]),t._v(" "),a("div",{staticClass:"is-two-thirds column is-paddingless"},[a("h2",{staticClass:"subtitle is-4"},[t._v(t._s(t.subheading))])]),t._v(" "),a("a",{staticClass:"button is-large is-primary",attrs:{id:"learn"}},[t._v("Learn more")])])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns pd is-desktop"},[a("div",{staticClass:"column is-1 has-text-centered"},[a("i",{staticClass:"fa fa-cog is-primary"})]),t._v(" "),a("div",{staticClass:"column is-one-third-desktop"},[a("p",{staticClass:"title"},[a("strong",[t._v("We provide superior logistics so that your business can succeed in a crazy world.")])])]),t._v(" "),a("div",{staticClass:"column"},[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.")])])])]),t._v(" "),a("div",{staticClass:"columns pd"},[a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title"},[t._v("\"I think it's an absolutely excellent tool for our business. I can't survive without this thing.\"")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("- Shane Weickum")])])])]),t._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title"},[t._v("\"I think it's an absolutely excellent tool for our business. I can't survive without this thing.\"")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("- Shane Weickum")])])])]),t._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title"},[t._v("\"I think it's an absolutely excellent tool for our business. I can't survive without this thing.\"")]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("- Shane Weickum")])])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"nav has-shadow"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("span",{staticClass:"nav-toggle",class:{"is-active":t.isActive},on:{click:t.toggleNav}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")]),t._v(" "),a("div",{staticClass:"nav-right nav-menu",class:{"is-active":t.isActive}},[a("router-link",{staticClass:"nav-item r-item",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),a("router-link",{staticClass:"nav-item r-item",attrs:{to:"faq"}},[t._v("Features")]),t._v(" "),a("router-link",{staticClass:"nav-item r-item",attrs:{to:"faq"}},[t._v("About")]),t._v(" "),a("router-link",{staticClass:"nav-item r-item",attrs:{to:"faq"}},[t._v("FAQ")]),t._v(" "),t._m(1)],1)])]),t._v(" "),a("router-view"),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav-left"},[a("a",{staticClass:"nav-item"},[t._v("MyCompany")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav-item"},[a("p",{staticClass:"control"},[a("a",{staticClass:"button is-primary is-outlined"},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-download"})]),t._v(" "),a("span",[t._v("Join Now")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer is-primary"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("p",[t._v("And this right here is a spiffy footer, where you can put stuff.")])]),t._v(" "),a("div",{staticClass:"column has-text-right"},[a("a",{staticClass:"icon",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-facebook"})]),t._v(" "),a("a",{staticClass:"icon",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-twitter"})])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"faq"},[a("div",{staticClass:"container"},[a("section",{staticClass:"section"},[a("h1",{staticClass:"title"},[t._v("FAQ")]),t._v(" "),a("h2",{staticClass:"subtitle is-4"},[t._v("Lorum ipsum and all of that jazz.")]),t._v(" "),t.faqs&&t.faqs.length?a("div",{staticClass:"columns"},t._l(t.faqs,function(s){return a("div",{staticClass:"column is-one-third"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"answer"},[t._v(t._s(s.body))])])])])})):t._e()])])])},staticRenderFns:[]}}],[34]);
//# sourceMappingURL=app.de847364d21a46b72aa9.js.map