webpackJsonp([1],{"90xE":function(t,e){},Ezp9:function(t,e){},F7oz:function(t,e){},GF7J:function(t,e){},Hsj0:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("Xxa5"),n=s.n(i),o=s("exGp"),r=s.n(o),l=s("Dd8w"),c=s.n(l);document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,s=document.getElementById(e);t.classList.toggle("is-active"),s.classList.toggle("is-active")})})});var d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar welcome is-info"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item brand-text",attrs:{to:"/",exact:""}},[t._v("\n        The Sandberg Vault\n      ")]),t._v(" "),t._m(0)],1),t._v(" "),s("div",{staticClass:"navbar-menu",attrs:{id:"navMenu"}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/",exact:""}},[t._v("\n          Home\n        ")]),t._v(" "),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("router-link",{staticClass:"navbar-link",attrs:{to:"/"}},[t._v("\n            Movies\n          ")]),t._v(" "),s("div",{staticClass:"navbar-dropdown is-boxed"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/my-movies"}},[t._v("\n              My movies\n            ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/movie-wishlist"}},[t._v("\n              My Wishlist\n            ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/loaned-movies"}},[t._v("\n              Loaned\n            ")]),t._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:"/borrowed-movies"}},[t._v("\n              Borrowed\n            ")])],1)],1)],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"burger navbar-burger",attrs:{"data-target":"navMenu"}},[e("span"),this._v(" "),e("span"),this._v(" "),e("span")])}]};var u=s("VU/8")({name:"nav-bar"},d,!1,function(t){s("qEJi")},"data-v-2f397d0e",null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-offset-one-quarter is-half"},[e("a",{staticClass:"button is-info",attrs:{href:"https://github.com/seanag0234/creative-project-4",target:"_blank"}},[e("i",{staticClass:"fa fa-github",staticStyle:{"padding-right":"5px"},attrs:{"aria-hidden":"true"}}),this._v(" Github")])])])])}]};var m=s("VU/8")({name:"MyFooter"},v,!1,function(t){s("rant")},"data-v-1a7d68ad",null).exports,h="https://seangeorge.club:3444",f=s("mtWM"),p=s.n(f),_=s("NYxO"),b={name:"App",components:{NavBar:u,MyFooter:m},methods:c()({},Object(_.b)(["setMovies"])),created:function(){var t=r()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get(h+"/movies");case 3:e=t.sent,this.setMovies(e.data.movies),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),this.$toaster.error("Something went wrong getting movies");case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}()},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav-bar"),this._v(" "),e("router-view"),this._v(" "),e("my-footer")],1)},staticRenderFns:[]};var C=s("VU/8")(b,g,!1,function(t){s("Z+L3"),s("GF7J")},null,null).exports,w=s("/ocq"),y={name:"Home",data:function(){return{search:"",searchResults:[]}},computed:c()({},Object(_.c)(["isAuthenticated","user","statusMap"]),{recentActivity:function(){return this.allMovies.slice(0,5)},allMovies:function(){return this.user.movies.sort(function(t,e){return t.updatedAt>e.updatedAt?-1:t.updatedAt<e.updatedAt?1:0})}}),watch:{search:function(t,e){""===t?this.searchResults=[]:t!==e&&this.doSearch()}},methods:c()({},Object(_.b)({logout:"logout"}),{doSearch:function(){var t=this;this.searchResults=this.allMovies.filter(function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())}).sort(function(t,e){return t.title<e.title?-1:t.title>e.title?1:0})},getRoute:function(t){var e={name:"MyMovies"};switch(t.status){case"owned":e.name="MyMovies";break;case"loaned":e.name="LoanedMovies";break;case"wishList":e.name="MovieWishlist";break;case"borrowed":e.name="BorrowedMovies"}return e},goToMovie:function(t){ot.push(this.getRoute(t))}})},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-centered"},[s("section",{staticClass:"hero is-info welcome is-small"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("\n              Hey "+t._s(t.user.name)+"! :)\n            ")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("\n              I hope you are having a great day!\n            ")])])])]),t._v(" "),s("section",{staticClass:"info-tiles"},[s("div",{staticClass:"tile is-ancestor has-text-centered"},[s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child box"},[s("p",{staticClass:"title"},[t._v(t._s(t.user.movies.length))]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("Movies Owned")])])])])]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6"},[s("div",{staticClass:"card events-card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-table"},[s("div",{staticClass:"content"},[s("table",{staticClass:"table is-fullwidth is-striped is-hoverable"},[s("tbody",[t._m(1),t._v(" "),t._l(t.recentActivity,function(e){return s("tr",{on:{click:function(s){t.goToMovie(e)}}},[t._m(2,!0),t._v(" "),s("td",[t._v(t._s(e.title))]),t._v(" "),s("td",[t._v(t._s(t.statusMap[e.status]))])])})],2)])])]),t._v(" "),s("footer",{staticClass:"card-footer"})])]),t._v(" "),s("div",{staticClass:"column is-6"},[s("div",{staticClass:"card"},[t._m(3),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.search,expression:"search",modifiers:{trim:!0}}],staticClass:"input is-large",attrs:{type:"text",placeholder:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t._m(4)])]),t._v(" "),t.searchResults.length>0?s("table",{staticClass:"table is-fullwidth is-striped is-hoverable"},[s("tbody",t._l(t.searchResults,function(e){return s("tr",[t._m(5,!0),t._v(" "),s("td",[s("router-link",{attrs:{to:t.getRoute(e)}},[t._v(t._s(e.title))])],1)])}))]):t._e()])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n                Recent Activity\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"is-hidden-mobile"}),this._v(" "),e("th",[this._v("Title")]),this._v(" "),e("th",[this._v("Status")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"is-hidden-mobile",attrs:{width:"5%"}},[e("i",{staticClass:"fa fa-film",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[this._v("\n                Movie Search\n              ")]),this._v(" "),e("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-medium is-left"},[e("i",{staticClass:"fa fa-search"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{width:"5%"}},[e("i",{staticClass:"fa fa-film",attrs:{"aria-hidden":"true"}})])}]};var I=s("VU/8")(y,M,!1,function(t){s("aMjM")},"data-v-ffdf20c8",null).exports,S={name:"delete-modal",data:function(){return{}},computed:c()({},Object(_.c)(["showDelete","currentItem"])),methods:c()({},Object(_.b)({toggleShowDelete:"toggleShowDelete",setMovies:"setMovies"}),{removeItem:function(){var t=r()(n.a.mark(function t(){var e,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a=this.currentItem.id,p.a.delete(h+"/movies/"+a);case 3:e=t.sent,s=e.data.movies,this.setMovies(s),this.$toaster.success("Movie deleted!"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),this.$toaster.error("Something went wrong");case 13:this.toggleShowDelete();case 14:case"end":return t.stop()}var a},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}()})},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",class:{"is-active":t.showDelete}},[s("div",{staticClass:"modal-background",on:{click:t.toggleShowDelete}}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Delete")]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.toggleShowDelete}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("div",{staticClass:"field"},[s("span",[t._v("Are you sure you want to delete "+t._s(t.currentItem.title)+"?")])])]),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-danger",on:{click:t.removeItem}},[t._v("Delete")]),t._v(" "),s("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.toggleShowDelete(e)}}},[t._v("Cancel")])])])])},staticRenderFns:[]};var k=s("VU/8")(S,A,!1,function(t){s("Ezp9")},"data-v-533c4d7a",null).exports,D=s("woOf"),E=s.n(D),x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Type")]),t._v(" "),s("div",{staticClass:"control select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.item.medium,expression:"item.medium"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.item,"medium",e.target.multiple?s:s[0])}}},t._l(t.options,function(e){return s("option",{domProps:{value:e.value}},[t._v(t._s(e.name))])}))])])},staticRenderFns:[]};var V=s("VU/8")({name:"type-selector",props:["item","options"]},x,!1,function(t){s("dVGj")},"data-v-eef07398",null).exports,$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Status")]),t._v(" "),s("div",{staticClass:"control select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.item.status,expression:"item.status"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.item,"status",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"owned"}},[t._v("In my library")]),t._v(" "),s("option",{attrs:{value:"loaned"}},[t._v("Loaned out")]),t._v(" "),s("option",{attrs:{value:"borrowed"}},[t._v("Borrowed")]),t._v(" "),s("option",{attrs:{value:"wishList"}},[t._v("Wish List")])])])])},staticRenderFns:[]};var R=s("VU/8")({name:"status-selector",props:["item"]},$,!1,function(t){s("x8VV")},"data-v-487ab794",null).exports,L={components:{TypeSelector:V,StatusSelector:R},name:"add-modal",props:["blankItem","options"],data:function(){return{item:E()({},this.blankItem)}},methods:c()({},Object(_.b)({toggleShowAddState:"toggleShowAdd",setMovies:"setMovies"}),{toggleShowAdd:function(){this.showAdd&&(this.newMovie=E()({},this.blankItem)),this.toggleShowAddState()},createMovie:function(){var t=r()(n.a.mark(function t(){var e,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a=this.item,void 0,i={movie:a},p.a.post(h+"/movies",i);case 3:e=t.sent,s=e.data.movies,this.setMovies(s),this.item=E()({},this.blankItem),this.$toaster.success("Movie successfully added!"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.$toaster.error("Couldn't add movie");case 13:this.toggleShowAdd();case 14:case"end":return t.stop()}var a,i},t,this,[[0,10]])}));return function(){return t.apply(this,arguments)}}()}),computed:c()({},Object(_.c)(["showAdd"]),{capitalizedType:function(){return this.item.type.charAt(0).toUpperCase()+this.item.type.slice(1)},isValid:function(){return""!==this.item.title}})},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",class:{"is-active":t.showAdd}},[s("div",{staticClass:"modal-background",on:{click:t.toggleShowAdd}}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Add a "+t._s(t.capitalizedType))]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.toggleShowAdd}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Title")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"input",class:{"is-danger":!t.isValid},attrs:{type:"text"},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Info")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.item.info,expression:"item.info"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.item.info},on:{input:function(e){e.target.composing||t.$set(t.item,"info",e.target.value)}}})])]),t._v(" "),s("status-selector",{attrs:{item:t.item}}),t._v(" "),s("type-selector",{attrs:{item:t.item,options:t.options}})],1),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-success",attrs:{disabled:!t.isValid},on:{click:t.createMovie}},[t._v("Add Movie")]),t._v(" "),s("button",{staticClass:"button",on:{click:t.toggleShowAdd}},[t._v("Cancel")])])])])},staticRenderFns:[]};var U=s("VU/8")(L,T,!1,function(t){s("azlN")},"data-v-28df17ea",null).exports,j={components:{StatusSelector:R,TypeSelector:V},name:"edit-modal",props:["options"],data:function(){return{isValid:!0}},computed:c()({},Object(_.c)(["showEdit","currentItem"]),{item:function(){return E()({},this.currentItem)}}),methods:c()({},Object(_.b)({toggleShowEdit:"toggleShowEdit",setMovies:"setMovies"}),{saveItem:function(){var t=r()(n.a.mark(function t(){var e,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a=this.item,void 0,i={movie:a},p.a.put(h+"/movies/"+a.id,i);case 3:e=t.sent,s=e.data.movies,this.setMovies(s),this.$toaster.success("Movie updated!"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),this.$toaster.error("Something went wrong");case 13:this.toggleShowEdit();case 14:case"end":return t.stop()}var a,i},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),calcValidity:function(){""===this.item.title?this.isValid=!1:this.isValid=!0}})},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",class:{"is-active":t.showEdit}},[s("div",{staticClass:"modal-background",on:{click:t.toggleShowEdit}}),t._v(" "),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Editing '"+t._s(t.currentItem.title)+"'")]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.toggleShowEdit}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Title")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"input",class:{"is-danger":!t.isValid},attrs:{type:"text"},domProps:{value:t.item.title},on:{keyup:function(e){return e.preventDefault(),t.calcValidity(e)},input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Info")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.item.info,expression:"item.info"}],staticClass:"input",attrs:{type:"email"},domProps:{value:t.item.info},on:{input:function(e){e.target.composing||t.$set(t.item,"info",e.target.value)}}})])]),t._v(" "),s("status-selector",{attrs:{item:t.item}}),t._v(" "),s("type-selector",{attrs:{options:t.options,item:t.item}})],1),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-success",attrs:{disabled:!t.isValid},on:{click:t.saveItem}},[t._v("Save Changes")]),t._v(" "),s("button",{staticClass:"button",on:{click:t.toggleShowEdit}},[t._v("Cancel")])])])])},staticRenderFns:[]};var O=s("VU/8")(j,F,!1,function(t){s("xhv/")},"data-v-7b7776eb",null).exports,B={name:"item-table",props:["items"],data:function(){return{currentMovie:{}}},methods:c()({},Object(_.b)({updateItem:"updateItem",addItem:"addItem",deleteItem:"deleteItem",toggleShowDelete:"toggleShowDelete",toggleShowAdd:"toggleShowAdd",setCurrentItem:"setCurrentItem",toggleShowEdit:"toggleShowEdit"}),{editItem:function(t){this.setCurrentItem(t),this.toggleShowEdit()},startDelete:function(t){this.setCurrentItem(t),this.toggleShowDelete()},convertDate:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds())}}),computed:c()({},Object(_.c)(["statusMap"]))},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"card events-card"},[s("div",[s("div",{staticClass:"content"},[s("div",{staticClass:"content"},[s("table",{staticClass:"table is-fullwidth is-striped is-hoverable"},[s("tbody",[t._m(0),t._v(" "),t._l(t.items,function(e){return s("tr",[t._m(1,!0),t._v(" "),s("td",[t._v(t._s(e.title))]),t._v(" "),s("td",{staticClass:"is-hidden-mobile"},[t._v(t._s(e.info))]),t._v(" "),s("td",[t._v(t._s(t.statusMap[e.status]))]),t._v(" "),s("td",{staticClass:"is-hidden-mobile"},[t._v(t._s(e.medium))]),t._v(" "),s("td",{staticClass:"is-hidden-mobile is-hidden-tablet"},[t._v(t._s(t.convertDate(e.updatedAt)))]),t._v(" "),s("td",{attrs:{width:"5%"}},[s("a",{staticClass:"button is-small is-primary",attrs:{href:"#"},on:{click:function(s){t.editItem(e)}}},[t._v("Edit")])]),t._v(" "),s("td",{attrs:{width:"5%"}},[s("a",{staticClass:"button is-small is-danger",attrs:{href:"#"},on:{click:function(s){t.startDelete(e)}}},[t._v("Delete")])])])})],2)])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{staticClass:"is-hidden-mobile"}),t._v(" "),s("th",[t._v("Title")]),t._v(" "),s("th",{staticClass:"is-hidden-mobile"},[t._v("Info")]),t._v(" "),s("th",[t._v("Status")]),t._v(" "),s("th",{staticClass:"is-hidden-mobile"},[t._v("Type")]),t._v(" "),s("th",{staticClass:"is-hidden-mobile is-hidden-tablet"},[t._v("Updated At")]),t._v(" "),s("td"),t._v(" "),s("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"is-hidden-mobile",attrs:{width:"5%"}},[e("i",{staticClass:"fa fa-film",attrs:{"aria-hidden":"true"}})])}]};var P=s("VU/8")(B,N,!1,function(t){s("QGP5")},"data-v-327b09dc",null).exports,z={name:"add-button",methods:c()({},Object(_.b)({toggleShowAdd:"toggleShowAdd"}))},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("a",{staticClass:"button is-info has-text-weight-bold",on:{click:this.toggleShowAdd}},[this._v("Add"),e("i",{staticClass:"fa fa-plus-circle",staticStyle:{"padding-left":"8px"},attrs:{"aria-hidden":"true"}})])])])},staticRenderFns:[]};var H=s("VU/8")(z,G,!1,function(t){s("90xE")},"data-v-7eda3674",null).exports,q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("section",{staticClass:"hero is-info welcome is-small"},[e("div",{staticClass:"hero-body no-padding"},[e("div",{staticClass:"container page-title"},[e("h1",{staticClass:"title"},[this._v("\n            "+this._s(this.title)+"\n          ")])])])])])])},staticRenderFns:[]};var W=s("VU/8")({name:"page-title",props:["title"]},q,!1,function(t){s("F7oz")},"data-v-8acbaef2",null).exports,J={name:"my-movies",components:{PageTitle:W,AddButton:H,ItemTable:P,AddModal:U,DeleteModal:k,EditModal:O},data:function(){return{title:"My Movies",blankMovie:{title:"",medium:"DVD",info:"",type:"movie",status:"owned"},options:[{value:"DVD",name:"DVD"},{value:"Blu Ray",name:"Blu Ray"}]}},computed:c()({},Object(_.c)(["isAuthenticated","user","currentItem"]),{movies:function(){return this.user.movies.filter(function(t){return"owned"===t.status}).sort(function(t,e){var s=t.title.toLowerCase(),a=e.title.toLowerCase();return s<a?-1:s>a?1:0})}})},K={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("page-title",{attrs:{title:t.title}}),t._v(" "),s("add-button"),t._v(" "),s("item-table",{attrs:{items:t.movies}}),t._v(" "),s("edit-modal",{attrs:{"current-item":t.currentItem,options:t.options}}),t._v(" "),s("add-modal",{attrs:{"blank-item":t.blankMovie,options:t.options}}),t._v(" "),s("delete-modal",{attrs:{item:t.currentItem}})],1)},staticRenderFns:[]};var Q=s("VU/8")(J,K,!1,function(t){s("wiKz")},"data-v-07d946f0",null).exports,Y={name:"loaned-movies",components:{PageTitle:W,AddButton:H,ItemTable:P,AddModal:U,DeleteModal:k,EditModal:O},data:function(){return{title:"Loaned Out Movies",blankMovie:{title:"",medium:"DVD",info:"",type:"movie",status:"loaned"},options:[{value:"DVD",name:"DVD"},{value:"Blu Ray",name:"Blu Ray"}]}},computed:c()({},Object(_.c)(["isAuthenticated","user","currentItem"]),{movies:function(){return this.user.movies.filter(function(t){return"loaned"===t.status}).sort(function(t,e){var s=t.title.toLowerCase(),a=e.title.toLowerCase();return s<a?-1:s>a?1:0})}})},Z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("page-title",{attrs:{title:t.title}}),t._v(" "),s("add-button"),t._v(" "),s("item-table",{attrs:{items:t.movies}}),t._v(" "),s("edit-modal",{attrs:{"current-item":t.currentItem,options:t.options}}),t._v(" "),s("add-modal",{attrs:{"blank-item":t.blankMovie,options:t.options}}),t._v(" "),s("delete-modal",{attrs:{item:t.currentItem}})],1)},staticRenderFns:[]};var X=s("VU/8")(Y,Z,!1,function(t){s("Hsj0")},"data-v-0cad4a0c",null).exports,tt={name:"movie-wishlist",components:{PageTitle:W,AddButton:H,ItemTable:P,AddModal:U,DeleteModal:k,EditModal:O},data:function(){return{title:"My Movie Wishlist",blankMovie:{title:"",medium:"DVD",info:"",type:"movie",status:"wishList"},options:[{value:"DVD",name:"DVD"},{value:"Blu Ray",name:"Blu Ray"}]}},computed:c()({},Object(_.c)(["isAuthenticated","user","currentItem"]),{movies:function(){return this.user.movies.filter(function(t){return"wishList"===t.status}).sort(function(t,e){var s=t.title.toLowerCase(),a=e.title.toLowerCase();return s<a?-1:s>a?1:0})}})},et={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("page-title",{attrs:{title:t.title}}),t._v(" "),s("add-button"),t._v(" "),s("item-table",{attrs:{items:t.movies}}),t._v(" "),s("edit-modal",{attrs:{"current-item":t.currentItem,options:t.options}}),t._v(" "),s("add-modal",{attrs:{"blank-item":t.blankMovie,options:t.options}}),t._v(" "),s("delete-modal",{attrs:{item:t.currentItem}})],1)},staticRenderFns:[]};var st=s("VU/8")(tt,et,!1,function(t){s("loqD")},"data-v-97b5a8ba",null).exports,at={name:"movie-wishlist",components:{PageTitle:W,AddButton:H,ItemTable:P,AddModal:U,DeleteModal:k,EditModal:O},data:function(){return{title:"Borrowed Movies",blankMovie:{title:"",medium:"DVD",info:"",type:"movie",status:"borrowed"},options:[{value:"DVD",name:"DVD"},{value:"Blu Ray",name:"Blu Ray"}]}},computed:c()({},Object(_.c)(["isAuthenticated","user","currentItem"]),{movies:function(){return this.user.movies.filter(function(t){return"borrowed"===t.status}).sort(function(t,e){var s=t.title.toLowerCase(),a=e.title.toLowerCase();return s<a?-1:s>a?1:0})}})},it={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("page-title",{attrs:{title:t.title}}),t._v(" "),s("add-button"),t._v(" "),s("item-table",{attrs:{items:t.movies}}),t._v(" "),s("edit-modal",{attrs:{"current-item":t.currentItem,options:t.options}}),t._v(" "),s("add-modal",{attrs:{"blank-item":t.blankMovie,options:t.options}}),t._v(" "),s("delete-modal",{attrs:{item:t.currentItem}})],1)},staticRenderFns:[]};var nt=s("VU/8")(at,it,!1,function(t){s("bL0k")},"data-v-5a1e17aa",null).exports;a.a.use(w.a);var ot=new w.a({linkActiveClass:"is-active",routes:[{path:"/",name:"Home",component:I},{path:"/my-movies",name:"MyMovies",component:Q},{path:"/loaned-movies",name:"LoanedMovies",component:X},{path:"/movie-wishlist",name:"MovieWishlist",component:st},{path:"/borrowed-movies",name:"BorrowedMovies",component:nt}]}),rt=s("8Go0"),lt=s.n(rt);s("kpSw");a.a.use(lt.a,{timeout:5e3}),a.a.use(_.a);var ct={statusMap:{owned:"In my library",borrowed:"Borrowed",loaned:"Loaned Out",wishList:"In my wish list"},isAuthenticated:!0,currentUser:{name:"Aubrey",movies:[]},nextId:5,contentType:"movie",showDelete:!1,showAdd:!1,showEdit:!1,currentItem:{}},dt=new _.a.Store({state:ct,getters:{currentItem:function(t){return t.currentItem},isAuthenticated:function(t){return t.isAuthenticated},contentType:function(t){return t.contentType},showDelete:function(t){return t.showDelete},showAdd:function(t){return t.showAdd},showEdit:function(t){return t.showEdit},user:function(t){return t.currentUser},nextId:function(t){return t.nextId},statusMap:function(t){return t.statusMap}},actions:{logout:function(t){t.commit("logout")},setMovies:function(t,e){t.commit("setMovies",e)},setContentType:function(t,e){t.commit("setContentType",e)},setCurrentItem:function(t,e){t.commit("setCurrentItem",e)},toggleShowDelete:function(t){t.commit("toggleShowDelete")},toggleShowEdit:function(t){t.commit("toggleShowEdit")},toggleShowAdd:function(t){t.commit("toggleShowAdd")},addItem:function(t,e){e.id=ct.nextId,e.updatedAt=Date.now(),t.commit("increment"),t.commit("addItem",e)},updateItem:function(t,e){t.commit("updateItem",e)},deleteItem:function(t,e){t.commit("deleteItem",e)}},mutations:{increment:function(t){t.nextId++},setCurrentItem:function(t,e){t.currentItem=e},setMovies:function(t,e){t.currentUser.movies=e},toggleShowDelete:function(t){t.showDelete=!t.showDelete},toggleShowAdd:function(t){t.showAdd=!t.showAdd},toggleShowEdit:function(t){t.showEdit=!t.showEdit},setContentType:function(t,e){t.contentType=e},addItem:function(t,e){"movie"===e.type&&t.currentUser.movies.push(e)},deleteItem:function(t,e){var s=-1,a=!1;"movie"===e.type&&t.currentUser.movies.forEach(function(t,i){a||t.id!==e.id||(s=i,a=!0)}),s>-1&&(t.currentUser.movies.splice(s,1),t.currentItem={})},updateItem:function(t,e){if("movie"===e.type){var s=-1,i=!1;t.currentUser.movies.forEach(function(t,a){i||t.id!==e.id||(s=a,i=!0)}),s>-1&&(e.updatedAt=Date.now(),a.a.set(t.currentUser.movies,s,e),t.currentItem={})}}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:ot,components:{App:C},template:"<App/>",store:dt})},QGP5:function(t,e){},"Z+L3":function(t,e){},aMjM:function(t,e){},azlN:function(t,e){},bL0k:function(t,e){},dVGj:function(t,e){},kpSw:function(t,e){},loqD:function(t,e){},qEJi:function(t,e){},rant:function(t,e){},wiKz:function(t,e){},x8VV:function(t,e){},"xhv/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.30a6f36bd5ab1fed13ee.js.map